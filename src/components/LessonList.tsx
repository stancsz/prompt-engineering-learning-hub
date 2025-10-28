import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Circle } from '@phosphor-icons/react'
import { Lesson } from '@/lib/lessons'
import { CompletedLessons } from '@/App'

interface LessonListProps {
  lessons: Lesson[]
  completedLessons: CompletedLessons
  onSelectLesson: (lessonId: string) => void
}

export function LessonList({ lessons, completedLessons, onSelectLesson }: LessonListProps) {
  const groupedLessons = lessons.reduce((acc, lesson) => {
    if (!acc[lesson.category]) {
      acc[lesson.category] = []
    }
    acc[lesson.category].push(lesson)
    return acc
  }, {} as Record<string, Lesson[]>)

  return (
    <div className="space-y-8">
      {Object.entries(groupedLessons).map(([category, categoryLessons]) => (
        <div key={category}>
          <h2 className="text-xl font-medium mb-4 text-foreground">{category}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categoryLessons.map((lesson) => {
              const isCompleted = completedLessons[lesson.id] || false
              
              return (
                <Card
                  key={lesson.id}
                  className="p-6 cursor-pointer transition-all hover:shadow-lg hover:scale-[1.02] hover:border-primary/50"
                  onClick={() => onSelectLesson(lesson.id)}
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="font-medium text-lg leading-tight">{lesson.title}</h3>
                    {isCompleted ? (
                      <CheckCircle size={24} weight="fill" className="text-accent flex-shrink-0" />
                    ) : (
                      <Circle size={24} weight="regular" className="text-muted-foreground flex-shrink-0" />
                    )}
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {lesson.description}
                  </p>
                  
                  <div className="flex items-center gap-2">
                    {lesson.exercises && lesson.exercises.length > 0 && (
                      <Badge variant="secondary" className="text-xs">
                        {lesson.exercises.length} {lesson.exercises.length === 1 ? 'Exercise' : 'Exercises'}
                      </Badge>
                    )}
                    {isCompleted && (
                      <Badge variant="outline" className="text-xs border-accent text-accent">
                        Completed
                      </Badge>
                    )}
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}