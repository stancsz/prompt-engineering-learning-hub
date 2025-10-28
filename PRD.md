# Prompt Engineering Learning Platform

An interactive documentation and learning tracker that teaches prompt engineering fundamentals through structured lessons with progress tracking and hands-on practice exercises. Now with Firebase authentication for secure user accounts and future cloud sync capabilities.

**Experience Qualities**:
1. **Educational** - Clear, progressive learning path with well-structured content that builds knowledge incrementally
2. **Interactive** - Hands-on exercises and real-time practice environments that reinforce concepts immediately
3. **Motivating** - Visual progress tracking and completion states that encourage continued learning

**Complexity Level**: Light Application (multiple features with basic state)
- The app manages lesson progress, user notes, and exercise completion states while providing an interactive learning environment with multiple content sections. Now includes user authentication for personalized experiences.

## Essential Features

### User Authentication
- **Functionality**: Passwordless email link sign-in via Firebase Authentication
- **Purpose**: Enables personalized learning experiences and future cloud synchronization of progress with seamless, secure authentication
- **Trigger**: User clicks "Sign In" button in header
- **Progression**: Click Sign In → Enter email → Receive sign-in link → Click link in email → Authenticated → User menu appears
- **Success criteria**: Users can sign in via email link without passwords; authentication state persists across page refreshes; links expire after 60 minutes

### Lesson Navigation & Progress Tracking
- **Functionality**: Browse lessons organized by topic with visual progress indicators
- **Purpose**: Helps learners understand their position in the curriculum and what they've mastered
- **Trigger**: User opens the app or clicks on lesson categories
- **Progression**: View lesson list → Select lesson → Read content → Mark complete → Progress updates
- **Success criteria**: Completion percentage accurately reflects finished lessons; visual indicators clearly show completed vs incomplete

### Interactive Lesson Content
- **Functionality**: Rich formatted lesson content with examples, code snippets, and explanations
- **Purpose**: Delivers core educational content in an engaging, digestible format
- **Trigger**: User selects a lesson from navigation
- **Progression**: Select lesson → Content loads → Read through sections → Review examples → Practice concepts
- **Success criteria**: Content is readable, well-formatted, and examples are clearly distinguished from explanatory text

### Hands-on Prompt Practice
- **Functionality**: Interactive text area where users can write and test prompts with AI feedback
- **Purpose**: Reinforces learning through practical application and immediate feedback
- **Trigger**: User clicks practice button within a lesson
- **Progression**: Open practice area → Write prompt → Submit → Receive AI feedback → Iterate
- **Success criteria**: Prompts successfully submit to AI, feedback is constructive and relevant to the lesson

### Personal Notes & Bookmarks
- **Functionality**: Add personal notes to lessons and bookmark important sections
- **Purpose**: Enables personalized learning and quick reference to key concepts
- **Trigger**: User clicks "Add Note" button while viewing lesson
- **Progression**: Click note button → Enter text → Save → Note persists with lesson
- **Success criteria**: Notes save correctly, persist between sessions, and display alongside relevant lessons

## Edge Case Handling
- **Unauthenticated users**: App remains fully functional; progress stored locally with banner encouraging sign-in for cloud sync
- **Authentication errors**: Clear, friendly error messages for common issues (invalid email, expired link, too many requests)
- **Email link expiration**: Clear messaging when sign-in link has expired with option to request new link
- **Empty states**: Show encouraging message and getting started guide when no lessons completed yet
- **Long content**: Implement smooth scrolling and clear section breaks for lengthy lessons
- **Incomplete exercises**: Allow users to save draft prompts and return later without losing work
- **No AI response**: Display friendly error message with retry option if AI feedback fails
- **First-time users**: Provide clear onboarding hints about how to navigate and use features

## Design Direction

The design should feel scholarly yet modern and approachable, like a premium online learning platform. The interface should be clean and focused, prioritizing content readability while maintaining visual interest through thoughtful typography and subtle interactive elements. A minimal interface best serves the core purpose, ensuring learners can focus on the educational content without distraction.

## Color Selection

Triadic color scheme that balances professionalism with energy - using deep blue (trust, learning), vibrant coral (energy, creativity), and fresh green (progress, success) to create a dynamic yet focused learning environment.

- **Primary Color**: Deep Ocean Blue `oklch(0.45 0.15 250)` - Communicates trust, intelligence, and depth of knowledge; used for key actions and navigation
- **Secondary Colors**: 
  - Soft Slate `oklch(0.96 0.005 250)` - Subtle backgrounds that don't compete with content
  - Cool Gray `oklch(0.88 0.01 250)` - Supporting UI elements and dividers
- **Accent Color**: Vibrant Coral `oklch(0.68 0.18 25)` - Energetic highlight for CTAs, active states, and achievement indicators
- **Foreground/Background Pairings**:
  - Background (White `oklch(1 0 0)`): Dark Slate text `oklch(0.2 0.02 250)` - Ratio 14.8:1 ✓
  - Card (Soft Slate `oklch(0.96 0.005 250)`): Dark Slate text `oklch(0.2 0.02 250)` - Ratio 13.2:1 ✓
  - Primary (Deep Ocean `oklch(0.45 0.15 250)`): White text `oklch(1 0 0)` - Ratio 7.9:1 ✓
  - Secondary (Cool Gray `oklch(0.88 0.01 250)`): Dark Slate text `oklch(0.2 0.02 250)` - Ratio 10.1:1 ✓
  - Accent (Vibrant Coral `oklch(0.68 0.18 25)`): White text `oklch(1 0 0)` - Ratio 5.2:1 ✓
  - Muted (Light Gray `oklch(0.94 0.005 250)`): Muted text `oklch(0.5 0.03 250)` - Ratio 6.8:1 ✓

## Font Selection

Typography should convey clarity and professionalism while maintaining warmth. Using Inter for its excellent readability and modern appearance, paired with JetBrains Mono for code examples to clearly distinguish instructional content from code.

- **Typographic Hierarchy**:
  - H1 (Lesson Title): Inter SemiBold/32px/tight letter-spacing (-0.02em)
  - H2 (Section Headers): Inter Medium/24px/normal letter-spacing
  - H3 (Subsections): Inter Medium/18px/normal letter-spacing
  - Body Text: Inter Regular/16px/relaxed line-height (1.7)
  - Code Examples: JetBrains Mono Regular/14px/normal line-height (1.5)
  - UI Labels: Inter Medium/14px/normal letter-spacing
  - Progress Stats: Inter SemiBold/20px/tight letter-spacing

## Animations

Animations should be subtle and purposeful, reinforcing the sense of progress and accomplishment without distracting from learning. Quick, smooth transitions guide attention to new content while gentle celebrations acknowledge achievements.

- **Purposeful Meaning**: Completion checkmarks animate with a satisfying pop-in effect that reinforces achievement; lesson transitions slide smoothly to maintain spatial continuity
- **Hierarchy of Movement**: Primary focus on progress indicators (completion badges, progress bars) with secondary micro-interactions on interactive elements (buttons, inputs)

## Component Selection

- **Components**: 
  - `Dialog` for authentication modal with email link form
  - `Avatar` for user profile display in header menu
  - `DropdownMenu` for user account menu with sign-out option
  - `Alert` for authentication error messages
  - `Tabs` for switching between lessons, practice, and notes sections
  - `Card` for lesson containers and exercise blocks with subtle shadows
  - `Progress` bar for overall learning completion with coral accent fill
  - `ScrollArea` for lesson content to handle long-form text gracefully
  - `Textarea` for prompt practice input with subtle focus states
  - `Badge` for lesson tags and completion status with rounded styling
  - `Button` with primary (deep blue) and accent (coral) variants for actions
  - `Separator` for visual breaks between lesson sections
  - `Checkbox` for marking lessons complete with custom coral checkmark
  
- **Customizations**: 
  - Custom lesson card component with hover state that lifts slightly
  - Progress ring component for circular completion percentage
  - Syntax-highlighted code block component for prompt examples
  
- **States**: 
  - Buttons: Default (solid primary/accent), Hover (slightly lighter with subtle lift), Active (pressed down), Disabled (reduced opacity)
  - Lesson cards: Default (flat), Hover (elevated shadow + scale 1.02), Completed (border accent + checkmark badge)
  - Text inputs: Default (border muted), Focus (border primary + subtle glow), Filled (maintain focus style when content present)
  
- **Icon Selection**: 
  - `SignIn` for authentication button
  - `SignOut` for sign-out menu item
  - `EnvelopeSimple` for email input fields
  - `CheckCircle` for email sent confirmation
  - `BookOpen` for lessons and documentation
  - `CheckCircle` for completed items
  - `Circle` for incomplete items  
  - `PencilSimple` for practice/exercises
  - `Note` for personal notes
  - `ChartLineUp` for progress tracking
  - `Lightbulb` for tips and best practices
  - `Code` for prompt examples
  
- **Spacing**: 
  - Section gaps: `gap-8` (2rem) for major sections
  - Card padding: `p-6` (1.5rem) for content cards
  - Element spacing: `gap-4` (1rem) for related items
  - Tight grouping: `gap-2` (0.5rem) for labels/inputs
  - Page margins: `px-6 py-8` on mobile, `px-12 py-10` on desktop
  
- **Mobile**: 
  - Stack lesson navigation above content on mobile with sticky header
  - Collapse progress stats into compact horizontal bar
  - Practice area becomes full-width drawer overlay
  - Touch-friendly button sizes (minimum 44px height)
  - Single column layout with generous touch targets
