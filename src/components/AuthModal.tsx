import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { EnvelopeSimple, CheckCircle } from '@phosphor-icons/react'
import { useAuth } from '@/hooks/useAuth'
import { toast } from 'sonner'

interface AuthModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AuthModal({ open, onOpenChange }: AuthModalProps) {
  const { sendSignInLink, isSignInLink, signInWithLink } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [email, setEmail] = useState('')
  const [linkSent, setLinkSent] = useState(false)

  useEffect(() => {
    const handleEmailLink = async () => {
      if (isSignInLink()) {
        const savedEmail = window.localStorage.getItem('emailForSignIn')
        if (savedEmail) {
          setIsLoading(true)
          try {
            await signInWithLink(savedEmail)
            window.localStorage.removeItem('emailForSignIn')
            toast.success('Successfully signed in!')
            onOpenChange(false)
          } catch (err: any) {
            setError(getErrorMessage(err.code))
          } finally {
            setIsLoading(false)
          }
        }
      }
    }

    if (open) {
      handleEmailLink()
    }
  }, [open, isSignInLink, signInWithLink, onOpenChange])

  const handleSendLink = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      await sendSignInLink(email)
      window.localStorage.setItem('emailForSignIn', email)
      setLinkSent(true)
      toast.success('Check your email for the sign-in link!')
    } catch (err: any) {
      setError(getErrorMessage(err.code))
    } finally {
      setIsLoading(false)
    }
  }

  const getErrorMessage = (code: string): string => {
    switch (code) {
      case 'auth/invalid-email':
        return 'Invalid email address.'
      case 'auth/user-disabled':
        return 'This account has been disabled.'
      case 'auth/too-many-requests':
        return 'Too many requests. Please try again later.'
      case 'auth/invalid-action-code':
        return 'This sign-in link is invalid or has expired.'
      default:
        return 'An error occurred. Please try again.'
    }
  }

  const handleClose = () => {
    onOpenChange(false)
    setTimeout(() => {
      setLinkSent(false)
      setEmail('')
      setError(null)
    }, 200)
  }

  if (linkSent) {
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <CheckCircle className="text-success" weight="fill" size={24} />
              Check Your Email
            </DialogTitle>
            <DialogDescription>
              We've sent a sign-in link to <strong>{email}</strong>
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="bg-muted/50 rounded-lg p-4 space-y-2">
              <p className="text-sm text-foreground">
                Click the link in your email to complete the sign-in process.
              </p>
              <p className="text-xs text-muted-foreground">
                The link will expire in 60 minutes. Make sure to open it on this device.
              </p>
            </div>

            <Button
              variant="outline"
              className="w-full"
              onClick={() => setLinkSent(false)}
            >
              Send Another Link
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Welcome to Prompt Engineering Academy</DialogTitle>
          <DialogDescription>
            Enter your email to receive a sign-in link.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSendLink} className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <div className="relative">
              <EnvelopeSimple className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
                required
                disabled={isLoading}
              />
            </div>
            <p className="text-xs text-muted-foreground">
              No password needed. We'll send you a secure sign-in link.
            </p>
          </div>

          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? 'Sending...' : 'Send Sign-In Link'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
