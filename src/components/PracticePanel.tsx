import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'
import { X, PaperPlaneRight, Lightbulb, Sparkle } from '@phosphor-icons/react'
import { Lesson } from '@/lib/lessons'
import { toast } from 'sonner'

interface PracticePanelProps {
  lesson: Lesson
  onClose: () => void
}

export function PracticePanel({ lesson, onClose }: PracticePanelProps) {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0)
  const [userPrompt, setUserPrompt] = useState('')
  const [feedback, setFeedback] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [showHint, setShowHint] = useState(false)

  const currentExercise = lesson.exercises?.[currentExerciseIndex]

  if (!currentExercise) {
    return null
  }

  const handleSubmit = async () => {
    if (!userPrompt.trim()) {
      toast.error('Please write a prompt first')
      return
    }

    setIsLoading(true)
    setFeedback(null)

    try {
      const evaluationPrompt = `You are an expert prompt engineering instructor. A student has written the following prompt in response to this exercise:

Exercise: ${currentExercise.prompt}
Evaluation Criteria: ${currentExercise.evaluationCriteria.join(', ')}

Student's Prompt:
${userPrompt}

Provide constructive feedback on their prompt. Be encouraging but specific. Point out what they did well and what could be improved. Keep your feedback under 150 words and actionable.`

      const result = await window.spark.llm(evaluationPrompt, 'gpt-4o-mini', false)
      setFeedback(result)
    } catch (error) {
      toast.error('Failed to get feedback. Please try again.')
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleNext = () => {
    if (currentExerciseIndex < (lesson.exercises?.length || 0) - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1)
      setUserPrompt('')
      setFeedback(null)
      setShowHint(false)
    }
  }

  const handlePrevious = () => {
    if (currentExerciseIndex > 0) {
      setCurrentExerciseIndex(currentExerciseIndex - 1)
      setUserPrompt('')
      setFeedback(null)
      setShowHint(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-end lg:items-center justify-center p-0 lg:p-4">
      <Card className="w-full lg:max-w-3xl h-[90vh] lg:h-auto lg:max-h-[85vh] flex flex-col rounded-t-2xl lg:rounded-2xl shadow-2xl">
        <div className="p-6 border-b border-border flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary">
                Exercise {currentExerciseIndex + 1} of {lesson.exercises?.length}
              </Badge>
            </div>
            <h2 className="text-xl font-semibold">Practice: {lesson.title}</h2>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X size={20} />
          </Button>
        </div>

        <ScrollArea className="flex-1 p-6">
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-lg mb-2">Exercise</h3>
              <p className="text-foreground leading-relaxed">{currentExercise.prompt}</p>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="font-medium text-sm">Your Prompt</label>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowHint(!showHint)}
                  className="gap-1.5 text-xs"
                >
                  <Lightbulb size={16} weight={showHint ? 'fill' : 'regular'} />
                  {showHint ? 'Hide' : 'Show'} Hint
                </Button>
              </div>

              {showHint && (
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-3 mb-3">
                  <p className="text-sm text-foreground">{currentExercise.hint}</p>
                </div>
              )}

              <Textarea
                value={userPrompt}
                onChange={(e) => setUserPrompt(e.target.value)}
                placeholder="Write your prompt here..."
                className="min-h-[150px] resize-none font-mono text-sm"
              />
            </div>

            <Button
              onClick={handleSubmit}
              disabled={isLoading || !userPrompt.trim()}
              className="w-full gap-2"
            >
              {isLoading ? (
                <>
                  <Sparkle size={20} className="animate-spin" />
                  Getting Feedback...
                </>
              ) : (
                <>
                  <PaperPlaneRight size={20} weight="fill" />
                  Get AI Feedback
                </>
              )}
            </Button>

            {feedback && (
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Sparkle size={18} weight="fill" className="text-primary" />
                  AI Feedback
                </h4>
                <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">
                  {feedback}
                </p>
              </div>
            )}

            <div className="pt-4 border-t border-border">
              <h4 className="font-medium text-sm mb-2">Evaluation Criteria</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                {currentExercise.evaluationCriteria.map((criteria, i) => (
                  <li key={i}>{criteria}</li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollArea>

        <div className="p-4 border-t border-border flex justify-between gap-2">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentExerciseIndex === 0}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            onClick={handleNext}
            disabled={currentExerciseIndex === (lesson.exercises?.length || 0) - 1}
          >
            Next Exercise
          </Button>
        </div>
      </Card>
    </div>
  )
}