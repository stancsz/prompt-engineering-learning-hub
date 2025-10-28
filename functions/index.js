const admin = require('firebase-admin')
const functions = require('firebase-functions')

admin.initializeApp()

const db = admin.firestore()

// Allowed keys for progress updates and validation helpers
const ALLOWED_KEYS = ['lastCompletedLesson', 'progressPercent']

function isInt(n) {
  return Number.isInteger(n)
}

exports.updateProgress = functions.https.onRequest(async (req, res) => {
  try {
    // Only allow POST
    if (req.method !== 'POST') {
      return res.status(405).send({ error: 'Method not allowed' })
    }

    // Basic App Check verification (if header provided)
    const appCheckToken = req.header('X-Firebase-AppCheck')
    if (!appCheckToken && process.env.FUNCTIONS_EMULATOR !== 'true') {
      return res.status(401).send({ error: 'Missing App Check token' })
    }
    if (appCheckToken) {
      try {
        await admin.appCheck().verifyToken(appCheckToken)
      } catch (err) {
        return res.status(401).send({ error: 'Invalid App Check token' })
      }
    }

    // Verify Firebase ID token from Authorization header
    const authHeader = req.header('Authorization') || ''
    const match = authHeader.match(/^Bearer\s+(.+)$/i)
    if (!match) {
      return res.status(401).send({ error: 'Missing or invalid Authorization header' })
    }
    const idToken = match[1]
    const decoded = await admin.auth().verifyIdToken(idToken)
    const uid = decoded.uid

    // Validate payload
    const payload = req.body || {}
    const keys = Object.keys(payload)

    // Must only contain allowed keys
    if (!keys.every(k => ALLOWED_KEYS.includes(k))) {
      return res.status(400).send({ error: 'Payload contains disallowed fields' })
    }

    // Validate types and ranges
    const lastCompletedLesson = payload.lastCompletedLesson
    const progressPercent = payload.progressPercent

    if (lastCompletedLesson !== undefined && !isInt(lastCompletedLesson)) {
      return res.status(400).send({ error: 'lastCompletedLesson must be an integer' })
    }
    if (progressPercent !== undefined) {
      if (!isInt(progressPercent)) {
        return res.status(400).send({ error: 'progressPercent must be an integer' })
      }
      if (progressPercent < 0 || progressPercent > 100) {
        return res.status(400).send({ error: 'progressPercent must be between 0 and 100' })
      }
    }

    // Rate limiting: ensure users can't update too frequently (>= 10s between updates)
    const docRef = db.doc(`users/${uid}/progress/doc`)
    const docSnap = await docRef.get()
    if (docSnap.exists) {
      const data = docSnap.data()
      if (data && data.updatedAt) {
        const prevTs = data.updatedAt.toDate ? data.updatedAt.toDate() : new Date(data.updatedAt)
        const diffSeconds = (Date.now() - prevTs.getTime()) / 1000
        if (diffSeconds < 10) {
          return res.status(429).send({ error: 'Too many requests. Please wait before updating again.' })
        }
      }
    }

    // Apply update with server timestamp
    const updatePayload = {}
    if (lastCompletedLesson !== undefined) updatePayload.lastCompletedLesson = lastCompletedLesson
    if (progressPercent !== undefined) updatePayload.progressPercent = progressPercent
    updatePayload.updatedAt = admin.firestore.FieldValue.serverTimestamp()

    await docRef.set(updatePayload, { merge: true })

    return res.status(200).send({ success: true })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('updateProgress error', err)
    return res.status(500).send({ error: 'Internal server error' })
  }
})
