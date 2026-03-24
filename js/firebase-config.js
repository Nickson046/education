/**
 * firebase-config.js
 * 
 * MarinGlobal Scholars — Firebase Configuration
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to https://console.firebase.google.com/
 * 2. Create a new project named "maringlobal-scholars"
 * 3. Add a Web App to the project
 * 4. Copy your config values below
 * 5. Enable Firestore Database in the Firebase console
 * 6. Enable Email/Password Authentication
 * 7. Set Firestore rules (see below)
 * 
 * FIRESTORE SECURITY RULES (paste in Firebase console):
 * 
 * rules_version = '2';
 * service cloud.firestore {
 *   match /databases/{database}/documents {
 *     // Public read for published posts and testimonials
 *     match /posts/{postId} {
 *       allow read: if resource.data.published == true;
 *       allow write: if request.auth != null;
 *     }
 *     match /testimonials/{id} {
 *       allow read: if resource.data.published == true;
 *       allow write: if request.auth != null;
 *     }
 *     match /inquiries/{id} {
 *       allow create: if true;
 *       allow read, update, delete: if request.auth != null;
 *     }
 *   }
 * }
 */

const FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Make config globally available
window.FIREBASE_CONFIG = FIREBASE_CONFIG;

/**
 * FIRESTORE COLLECTIONS:
 * 
 * /posts
 *   - id: auto
 *   - title: string
 *   - excerpt: string
 *   - body: string (HTML allowed)
 *   - category: 'visa' | 'admissions' | 'scholarships' | 'life' | 'universities'
 *   - author: string
 *   - emoji: string (single emoji for card display)
 *   - published: boolean
 *   - createdAt: timestamp
 *   - updatedAt: timestamp
 * 
 * /testimonials
 *   - id: auto
 *   - name: string
 *   - initials: string (e.g. "AN")
 *   - country: 'latvia' | 'lithuania' | 'estonia'
 *   - originCountry: string (e.g. "Tanzania")
 *   - field: 'medicine' | 'engineering' | 'business' | 'it' | 'law'
 *   - university: string
 *   - programme: string
 *   - year: string
 *   - quote: string
 *   - published: boolean
 *   - createdAt: timestamp
 * 
 * /inquiries
 *   - firstName, lastName, email, phone
 *   - country, destination, field, message
 *   - status: 'new' | 'contacted' | 'enrolled' | 'closed'
 *   - createdAt: timestamp
 *   - notes: string (admin only)
 */
