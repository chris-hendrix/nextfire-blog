import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDGKFefmMIJvb4cscMpTm_s_digAwkMiQQ',
  authDomain: 'nextfire-da517.firebaseapp.com',
  projectId: 'nextfire-da517',
  storageBucket: 'nextfire-da517.appspot.com',
  messagingSenderId: '901276707375',
  appId: '1:901276707375:web:dae3e38da90c75ac8d74da'
}

const firebaseApp = initializeApp(firebaseConfig)

export const auth = getAuth(firebaseApp)
export const firestore = getFirestore(firebaseApp)
export const storage = getStorage(firebaseApp)
export const signIn = () => signInWithPopup(auth, new GoogleAuthProvider())
export const signOut = () => auth.signOut()
