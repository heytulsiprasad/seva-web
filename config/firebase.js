import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCoEYMM0awkmsxMSZqHyWkk3WTMzgaaECk',
  authDomain: 'seva-backend.firebaseapp.com',
  projectId: 'seva-backend',
  storageBucket: 'seva-backend.appspot.com',
  messagingSenderId: '146207858932',
  appId: '1:146207858932:web:36681b559ebfd0f6983ea1',
}

// Initialize firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
