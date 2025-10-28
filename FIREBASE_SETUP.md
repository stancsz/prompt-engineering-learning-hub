# Prompt Engineering Academy - Firebase Setup Guide

This application uses Firebase for authentication and data storage. Follow these steps to configure Firebase for your deployment.

## Prerequisites

- A Google account
- Node.js installed on your machine

## Step 1: Create a Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or "Create a project"
3. Enter a project name (e.g., "prompt-engineering-academy")
4. (Optional) Enable Google Analytics if desired
5. Click "Create project"

## Step 2: Register Your Web App

1. In your Firebase project dashboard, click the **Web icon** (`</>`) to add a web app
2. Register your app with a nickname (e.g., "Prompt Engineering Web App")
3. **Do NOT** check "Also set up Firebase Hosting" (unless you plan to use it)
4. Click "Register app"
5. Copy the Firebase configuration object - you'll need these values

## Step 3: Enable Email/Password Authentication

1. In the Firebase Console, go to **Authentication** in the left sidebar
2. Click "Get started" if this is your first time
3. Go to the **Sign-in method** tab
4. Click on **Email/Password**
5. Toggle **Enable** to ON
6. Click **Save**

## Step 4: Set Up Firestore Database (Optional - for future sync)

1. In the Firebase Console, go to **Firestore Database** in the left sidebar
2. Click "Create database"
3. Choose **Start in production mode** (recommended) or **Start in test mode**
4. Select a Cloud Firestore location (choose one close to your users)
5. Click "Enable"

### Firestore Security Rules (Production Mode)

If you chose production mode, update your Firestore rules to allow authenticated users to read/write their own data:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## Step 5: Configure Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Open `.env` and fill in your Firebase configuration values from Step 2:

   ```env
   VITE_FIREBASE_API_KEY=your-api-key-here
   VITE_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   VITE_FIREBASE_APP_ID=your-app-id
   ```

3. **Important**: Never commit the `.env` file to version control! It's already in `.gitignore`.

## Step 6: Run the Application

```bash
npm install
npm run dev
```

The app should now be running with Firebase authentication enabled!

## Features

### Current Features
- ✅ Email/Password authentication
- ✅ User sign-up and sign-in
- ✅ Password reset via email
- ✅ Persistent local storage for lessons and notes
- ✅ User profile menu

### Upcoming Features (can be added)
- 🔄 Sync progress across devices using Firestore
- 🔄 Social authentication (Google, GitHub)
- 🔄 User profiles with avatars
- 🔄 Shareable progress badges

## How Authentication Works

1. **Public Access**: Anyone can view lessons without signing in
2. **Sign In Benefit**: Progress and notes are saved locally (using browser storage)
3. **Future**: When you sign in, your data can sync to Firestore (requires additional implementation)

## Troubleshooting

### "Firebase configuration error"
- Make sure all environment variables in `.env` are filled in correctly
- Restart your development server after changing `.env` values

### "Email already in use"
- This email already has an account. Use the sign-in form instead

### "Weak password"
- Passwords must be at least 6 characters long

### "User not found" or "Wrong password"
- Check your email and password and try again
- Use "Forgot password?" to reset your password

### Email not receiving password reset
- Check your spam/junk folder
- Verify the email address is correct
- Make sure Email/Password authentication is enabled in Firebase Console

## Security Notes

- Never share your `.env` file or commit it to version control
- Firebase API keys are safe to expose in client-side code (they're not secret)
- Security is enforced by Firebase Security Rules, not by hiding the API key
- Always use Firebase Security Rules to protect your data

## Advanced: Deploy to Production

When deploying to production (Vercel, Netlify, etc.), add your environment variables in your hosting platform's dashboard:

### Vercel
1. Go to Project Settings → Environment Variables
2. Add each `VITE_*` variable with its value

### Netlify
1. Go to Site Settings → Build & Deploy → Environment
2. Add each `VITE_*` variable with its value

## Support

For Firebase-specific issues, check the [Firebase Documentation](https://firebase.google.com/docs).
For app-specific questions, please refer to the main README or open an issue.
