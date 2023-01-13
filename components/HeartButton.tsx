import { useState, useEffect } from 'react'
import { firestore, auth, getPostHeartDocByUid } from '../lib/firebase'
import {
  increment,
  DocumentReference,
  QueryDocumentSnapshot,
  writeBatch,
} from 'firebase/firestore'
// Allows user to heart or like a post
export default function Heart({ postRef }: { postRef: DocumentReference }) {
  // Listen to heart document for currently logged in user

  const [heartDoc, setHeartDoc] = useState<QueryDocumentSnapshot | null>(null)
  useEffect(() => { uid && getPostHeartDocByUid(uid, postRef).then(res => setHeartDoc(res)) }, [])

  const uid = auth.currentUser?.uid

  // Create a user-to-post relationship
  const addHeart = async () => {

    const heartDoc = uid && await getPostHeartDocByUid(uid, postRef)
    if (!heartDoc) return
    const batch = writeBatch(firestore)

    batch.update(postRef, { heartCount: increment(1) })
    batch.set(heartDoc.ref, { uid })

    await batch.commit()
  }

  // Remove a user-to-post relationship
  const removeHeart = async () => {
    const heartDoc = uid && await getPostHeartDocByUid(uid, postRef)
    if (!heartDoc) return

    const batch = writeBatch(firestore)

    batch.update(postRef, { heartCount: increment(-1) })
    batch.delete(heartDoc.ref)

    await batch.commit()
  }

  console.log({ heartDoc, exists: heartDoc?.exists() })

  if (!heartDoc) return null


  return heartDoc?.exists() ? (
    <button onClick={removeHeart}>💔 Unheart</button>
  ) : (
    <button onClick={addHeart}>💗 Heart</button>
  )
}