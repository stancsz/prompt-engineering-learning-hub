import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { ChartLineUp, SignIn } from '@phosphor-icons/react'
import { UserMenu } from './UserMenu'
import { useAuth } from '@/hooks/useAuth'

interface ProgressHeaderProps {
  completedCount: number
  totalLessons: number
  progressPercentage: number
  onOpenAuth: () => void
}

export function ProgressHeader({ completedCount, totalLessons, progressPercentage, onOpenAuth }: ProgressHeaderProps) {
  const { user } = useAuth()

  return (
    <div className="bg-card border-b border-border">
      <div className="container mx-auto px-6 py-4 lg:px-12">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <ChartLineUp size={24} weight="duotone" className="text-accent" />
            <div>
              <div className="text-sm font-medium text-muted-foreground">Your Progress</div>
              <div className="text-lg font-semibold tracking-tight">
                {completedCount} of {totalLessons} lessons completed
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4 min-w-[200px]">
              <Progress value={progressPercentage} className="flex-1" />
              <span className="text-sm font-semibold text-primary min-w-[3ch] text-right">
                {progressPercentage}%
              </span>
            </div>
            
            {user ? (
              <UserMenu />
            ) : (
              <Button onClick={onOpenAuth} className="gap-2">
                <SignIn size={18} />
                Sign In
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}