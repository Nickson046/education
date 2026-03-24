/* =============================================
   MARINGLOBAL SCHOLARS — Firebase Configuration
   Firebase JS SDK v12.11.0
   =============================================

   FIRESTORE SECURITY RULES — paste in Firebase console
   (Firebase Console → Firestore → Rules tab):

   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /posts/{postId} {
         allow read: if resource.data.published == true;
         allow write: if request.auth != null;
       }
       match /testimonials/{id} {
         allow read: if resource.data.published == true;
         allow write: if request.auth != null;
       }
       match /inquiries/{id} {
         allow create: if true;
         allow read, update, delete: if request.auth != null;
       }
     }
   }

   FIRESTORE COLLECTIONS SCHEMA:

   /posts
     - title: string
     - excerpt: string
     - body: string (HTML allowed)
     - category: 'visa' | 'admissions' | 'scholarships' | 'life' | 'universities'
     - author: string
     - emoji: string
     - published: boolean
     - createdAt: timestamp
     - updatedAt: timestamp

   /testimonials
     - name: string
     - initials: string (e.g. "AN")
     - country: 'latvia' | 'lithuania' | 'estonia'
     - originCountry: string (e.g. "Tanzania")
     - field: 'medicine' | 'engineering' | 'business' | 'it' | 'law'
     - university: string
     - programme: string
     - year: string
     - quote: string
     - published: boolean
     - createdAt: timestamp

   /inquiries
     - firstName, lastName, email, phone
     - country, destination, field, message
     - status: 'new' | 'contacted' | 'enrolled' | 'closed'
     - createdAt: timestamp
     - notes: string (admin only)
============================================= */

const FIREBASE_CONFIG = {
  apiKey:            "AIzaSyAO2lcRfzatY1RoFzzz_SOYwUZir6xsdCA",
  authDomain:        "maringlobal-scholars.firebaseapp.com",
  projectId:         "maringlobal-scholars",
  storageBucket:     "maringlobal-scholars.firebasestorage.app",
  messagingSenderId: "604840566992",
  appId:             "1:604840566992:web:70c1d0f0e94a73d595fed5",
  measurementId:     "G-5J89LNVCB9"
};

// Make config globally available to admin.html, blog.html, and any other page
window.FIREBASE_CONFIG = FIREBASE_CONFIG;