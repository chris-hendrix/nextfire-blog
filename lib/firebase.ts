import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, collection, DocumentData, query, where, getDocs, limit } from 'firebase/firestore'
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


/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
export async function getUserWithUsername(username: string) {
  const usersRef = collection(firestore, 'users')
  const q = query(usersRef, where('username', '==', username), limit(1))
  const userDoc = (await getDocs(q)).docs[0]
  return userDoc
}

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(doc: DocumentData) {
  const data = doc.data()
  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: data.createdAt.toMillis(),
    updatedAt: data.updatedAt.toMillis(),
  }
}
