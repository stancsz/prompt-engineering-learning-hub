# Prompt Engineering Academy

An interactive learning platform for mastering prompt engineering through structured lessons, hands-on practice, and progress tracking. Built with React, TypeScript, and Firebase.

## 🚀 Features

- ✅ **Comprehensive Lessons**: 20+ structured lessons covering prompt engineering fundamentals
- ✅ **Progress Tracking**: Visual indicators showing your learning journey
- ✅ **Hands-on Practice**: Interactive exercises to reinforce concepts
- ✅ **Personal Notes**: Add notes to each lesson for future reference
- ✅ **Firebase Authentication**: Secure email/password authentication
- ✅ **Responsive Design**: Beautiful UI that works on all devices
- ✅ **Local Storage**: Progress saved automatically in your browser

## 🔧 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Firebase (Required for Authentication)

See **[FIREBASE_SETUP.md](./FIREBASE_SETUP.md)** for detailed Firebase configuration instructions.

**Quick version:**
1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com/)
2. Enable Email/Password authentication
3. Copy `.env.example` to `.env`
4. Fill in your Firebase credentials in `.env`

### 3. Run the App

```bash
npm run dev
```

The app will open at `http://localhost:5173`

## 📖 How to Use

1. **Browse Lessons**: Explore lessons organized by category on the home page
2. **Track Progress**: Mark lessons as complete to see your progress grow
3. **Take Notes**: Add personal insights and reminders to each lesson
4. **Practice**: Complete interactive exercises to reinforce learning
5. **Sign In**: Create an account to prepare for future cloud sync features

## 🏗️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Authentication**: Firebase Auth
- **Database**: Firestore (ready for future sync)
- **Build Tool**: Vite
- **Icons**: Phosphor Icons
- **State**: React Hooks + spark.kv persistence

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn components
│   ├── AuthModal.tsx    # Authentication modal
│   ├── UserMenu.tsx     # User profile menu
│   ├── LessonList.tsx   # Lesson browser
│   ├── LessonView.tsx   # Lesson reader
│   ├── PracticePanel.tsx # Practice exercises
│   └── ProgressHeader.tsx # Progress tracking header
├── hooks/
│   ├── useAuth.ts       # Firebase authentication hook
│   └── use-mobile.ts    # Responsive layout hook
├── lib/
│   ├── firebase.ts      # Firebase configuration
│   ├── lessons.ts       # Lesson content
│   └── utils.ts         # Utility functions
├── App.tsx              # Main application
└── index.css            # Global styles
```

## 🔐 Authentication

The app uses Firebase Authentication with email/password sign-in:

- **Public Access**: Anyone can view lessons without signing in
- **Progress Storage**: Currently stored locally in browser
- **Future**: Signed-in users will sync progress across devices (requires Firestore implementation)

## 🎨 Design Philosophy

- **Clean & Minimal**: Focus on content, not distractions
- **Educational**: Clear hierarchy and progressive learning path
- **Motivating**: Visual progress indicators encourage completion
- **Professional**: Modern design that feels premium yet approachable

## 🚧 Roadmap

- ✅ Email/Password authentication
- ⬜ Cloud sync for progress and notes (Firestore)
- ⬜ Social authentication (Google, GitHub)
- ⬜ Shareable progress badges
- ⬜ Community features
- ⬜ More lessons and categories
- ⬜ Advanced practice modes

## 🤝 Contributing

This is a learning platform! Feel free to:
- Add more lessons
- Improve existing content
- Enhance the UI/UX
- Report bugs or request features

## 📄 License

The Spark Template files and resources from GitHub are licensed under the terms of the MIT license, Copyright GitHub, Inc.

---

**Need Help?** Check [FIREBASE_SETUP.md](./FIREBASE_SETUP.md) for Firebase configuration or open an issue.
