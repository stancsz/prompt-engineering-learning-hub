import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, CheckCircle, Circle, PencilSimple, Lightbulb } from '@phosphor-icons/react'
import { Lesson } from '@/lib/lessons'

interface LessonViewProps {
  lesson: Lesson
  isCompleted: boolean
  note: string
  onToggleComplete: () => void
  onUpdateNote: (note: string) => void
  onBack: () => void
  onStartPractice: () => void
}

export function LessonView({
  lesson,
  isCompleted,
  note,
  onToggleComplete,
  onUpdateNote,
  onBack,
  onStartPractice
}: LessonViewProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft size={20} />
        </Button>
        <div className="flex-1">
          <Badge variant="secondary" className="mb-2">{lesson.category}</Badge>
          <h1 className="text-3xl font-semibold tracking-tight">{lesson.title}</h1>
        </div>
      </div>

      <Card className="p-8">
        <div className="prose prose-slate max-w-none">
          {lesson.content.map((section, index) => {
            switch (section.type) {
              case 'heading':
                return (
                  <h2 key={index} className="text-2xl font-medium mt-8 first:mt-0 mb-4">
                    {section.content as string}
                  </h2>
                )
              
              case 'paragraph':
                return (
                  <p key={index} className="text-base leading-relaxed mb-4 text-foreground">
                    {section.content as string}
                  </p>
                )
              
              case 'code':
                return (
                  <pre key={index} className="bg-muted p-4 rounded-lg mb-4 overflow-x-auto">
                    <code className="text-sm">{section.content as string}</code>
                  </pre>
                )
              
              case 'list':
                return (
                  <ul key={index} className="list-disc list-inside space-y-2 mb-4 text-foreground">
                    {(section.content as string[]).map((item, i) => (
                      <li key={i} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>
                )
              
              case 'tip':
                return (
                  <div key={index} className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg mb-4">
                    <div className="flex gap-3">
                      <Lightbulb size={20} weight="fill" className="text-accent flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground leading-relaxed">
                        {section.content as string}
                      </p>
                    </div>
                  </div>
                )
              
              default:
                return null
            }
          })}
        </div>
      </Card>

      <div className="flex items-center justify-between gap-4 flex-wrap">
        <Button
          variant={isCompleted ? "outline" : "default"}
          onClick={onToggleComplete}
          className="gap-2"
        >
          {isCompleted ? (
            <>
              <CheckCircle size={20} weight="fill" />
              Mark Incomplete
            </>
          ) : (
            <>
              <Circle size={20} />
              Mark Complete
            </>
          )}
        </Button>

        {lesson.exercises && lesson.exercises.length > 0 && (
          <Button variant="default" className="gap-2 bg-accent hover:bg-accent/90" onClick={onStartPractice}>
            <PencilSimple size={20} weight="fill" />
            Practice Exercises
          </Button>
        )}
      </div>

      <Separator />

      <Card className="p-6">
        <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
          <PencilSimple size={20} />
          Personal Notes
        </h3>
        <Textarea
          value={note}
          onChange={(e) => onUpdateNote(e.target.value)}
          placeholder="Add your thoughts, insights, or reminders about this lesson..."
          className="min-h-[120px] resize-none"
        />
      </Card>
    </div>
  )
}