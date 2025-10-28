import { useState } from 'react'
import { useKV } from '@github/spark/hooks'
import { LessonList } from './components/LessonList'
import { LessonView } from './components/LessonView'
import { PracticePanel } from './components/PracticePanel'
import { ProgressHeader } from './components/ProgressHeader'
import { lessons } from './lib/lessons'
import { BookOpen } from '@phosphor-icons/react'

export interface CompletedLessons {
  [lessonId: string]: boolean
}

export interface LessonNotes {
  [lessonId: string]: string
}

function App() {
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null)
  const [completedLessons, setCompletedLessons] = useKV<CompletedLessons>('completed-lessons', {})
  const [lessonNotes, setLessonNotes] = useKV<LessonNotes>('lesson-notes', {})
  const [showPractice, setShowPractice] = useState(false)

  const selectedLesson = lessons.find(l => l.id === selectedLessonId)
  const completedCount = Object.values(completedLessons || {}).filter(Boolean).length
  const totalLessons = lessons.length
  const progressPercentage = Math.round((completedCount / totalLessons) * 100)

  const toggleLessonComplete = (lessonId: string) => {
    setCompletedLessons(current => ({
      ...(current || {}),
      [lessonId]: !(current || {})[lessonId]
    }))
  }

  const updateNote = (lessonId: string, note: string) => {
    setLessonNotes(current => ({
      ...(current || {}),
      [lessonId]: note
    }))
  }

  return (
    <div className="min-h-screen bg-background">
      <ProgressHeader 
        completedCount={completedCount}
        totalLessons={totalLessons}
        progressPercentage={progressPercentage}
      />
      
      <div className="container mx-auto px-6 py-8 lg:px-12 lg:py-10">
        {!selectedLessonId ? (
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <BookOpen size={32} weight="duotone" className="text-primary" />
                <h1 className="text-3xl font-semibold tracking-tight">Prompt Engineering Academy</h1>
              </div>
              <p className="text-muted-foreground text-lg">
                Master the art of communicating with AI through structured lessons and hands-on practice.
              </p>
            </div>
            
            <LessonList
              lessons={lessons}
              completedLessons={completedLessons || {}}
              onSelectLesson={setSelectedLessonId}
            />
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <LessonView
              lesson={selectedLesson!}
              isCompleted={(completedLessons || {})[selectedLessonId] || false}
              note={(lessonNotes || {})[selectedLessonId] || ''}
              onToggleComplete={() => toggleLessonComplete(selectedLessonId)}
              onUpdateNote={(note) => updateNote(selectedLessonId, note)}
              onBack={() => setSelectedLessonId(null)}
              onStartPractice={() => setShowPractice(true)}
            />
          </div>
        )}
      </div>

      {showPractice && selectedLesson?.exercises && (
        <PracticePanel
          lesson={selectedLesson}
          onClose={() => setShowPractice(false)}
        />
      )}
    </div>
  )
}

export default App