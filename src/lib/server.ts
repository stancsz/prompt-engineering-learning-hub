import { auth } from '@/lib/firebase'
import { getIdToken } from 'firebase/auth'

type ProgressPayload = {
  lastCompletedLesson?: number
  progressPercent?: number
}

/**
 * Send progress to server-side Cloud Function which validates auth, App Check,
 * rate-limits and writes to Firestore. This prevents clients from directly
 * writing arbitrary data and enforces server-side rules.
 */
export async function sendProgressToServer(payload: ProgressPayload) {
  if (!auth.currentUser) throw new Error('Not authenticated')

  const idToken = await getIdToken(auth.currentUser, /* forceRefresh */ true)

  const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID || 'prompt-engineering-l'
  const useEmulator = import.meta.env.VITE_FIREBASE_EMULATOR === 'true' || typeof window !== 'undefined' && window.location.hostname === 'localhost'

  const baseUrl = useEmulator
    ? `http://localhost:5001/${projectId}/us-central1`
    : `https://us-central1-${projectId}.cloudfunctions.net`

  const res = await fetch(`${baseUrl}/updateProgress`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${idToken}`
      // Optionally include App Check token:
      // 'X-Firebase-AppCheck': APP_CHECK_TOKEN
    },
    body: JSON.stringify(payload)
  })

  if (!res.ok) {
    const body = await res.json().catch(() => null)
    throw new Error(body?.error || `Failed to update progress (${res.status})`)
  }

  return res.json()
}

/**
 * Example usage:
 *
 * import { sendProgressToServer } from '@/lib/server'
 * await sendProgressToServer({ lastCompletedLesson: 3, progressPercent: 25 })
 *
 * Integrate this call where the app currently would persist user progress.
 */
