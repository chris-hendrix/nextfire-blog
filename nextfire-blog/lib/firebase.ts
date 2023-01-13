import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import {
  getFirestore,
  collection,
  DocumentData,
  DocumentReference,
  query,
  where,
  getDocs,
  limit,
  Timestamp
} from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { parsePost } from './parse'

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
export async function getUserDocByUsername(username: string) {
  const usersRef = collection(firestore, 'users')
  const usersQuery = query(usersRef, where('username', '==', username), limit(1))
  const userDoc = (await getDocs(usersQuery)).docs[0]
  return userDoc
}

/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
export async function getPostDocBySlug(userRef: DocumentReference, slug: string) {
  const postsRef = collection(userRef, 'posts')
  const postsQuery = query(postsRef, where('slug', '==', slug), limit(1))
  const postDoc = (await getDocs(postsQuery)).docs[0]
  return postDoc
}

/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
export async function getPostHeartDocByUid(uid: string, postRef: DocumentReference) {
  const heartsRef = collection(postRef, 'hearts')
  const heartQuery = query(heartsRef, where('uid', '==', uid), limit(1))
  const heartDoc = (await getDocs(heartQuery)).docs[0]
  return heartDoc
}

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(doc: DocumentData) {
  const data = doc.data()
  return parsePost({
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: data.createdAt?.toMillis() || data.createdAt,
    updatedAt: data.updatedAt?.toMillis() || data.createdAt,
  })
}

export const fromMillis = Timestamp.fromMillis

export const getParam = (key: string, params?: any): string => {
  return params && Object.keys(params).includes(key) ? params[key] : null
}

export const STATE_CHANGED = 'state_changed'
