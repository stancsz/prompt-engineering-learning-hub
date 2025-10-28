import { useState, useEffect } from 'react'
import { 
  User,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink as firebaseSignInWithEmailLink
} from 'firebase/auth'
import { auth } from '@/lib/firebase'

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const sendSignInLink = async (email: string) => {
    const actionCodeSettings = {
      url: window.location.origin + window.location.pathname,
      handleCodeInApp: true,
    }
    return sendSignInLinkToEmail(auth, email, actionCodeSettings)
  }

  const isSignInLink = () => {
    return isSignInWithEmailLink(auth, window.location.href)
  }

  const signInWithLink = async (email: string) => {
    return firebaseSignInWithEmailLink(auth, email, window.location.href)
  }

  const signOut = async () => {
    return firebaseSignOut(auth)
  }

  return {
    user,
    loading,
    sendSignInLink,
    isSignInLink,
    signInWithLink,
    signOut
  }
}
