import styles from '../../styles/Admin.module.css'
import AuthCheck from '../../components/AuthCheck'
import { firestore, auth, getPostDocBySlug, postToJSON } from '../../lib/firebase'
import { doc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { Post } from '../../lib/types'
import { QueryDocumentSnapshot, DocumentReference } from 'firebase/firestore'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { useForm } from 'react-hook-form'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import toast from 'react-hot-toast'

export default function AdminPostEdit() {
  return (
    <AuthCheck>
      <PostManager />
    </AuthCheck>
  )
}

function PostManager() {
  const [preview, setPreview] = useState(false)
  const [postDoc, setPostDoc] = useState<QueryDocumentSnapshot | null>(null)

  console.log({ postDoc })

  const router = useRouter()
  const slug = String(router.query.slug)

  const uid = auth.currentUser?.uid
  const userRef = doc(firestore, `users/${uid}`)

  useEffect(() => {
    slug && getPostDocBySlug(userRef, slug).then((doc) => { setPostDoc(doc) })
  }, [])

  if (!postDoc) return null

  const post = postToJSON(postDoc)
  return (
    <main className={styles.container}>
      {post && (
        <>
          <section>
            <h1>{post.title}</h1>
            <p>ID: {post.slug}</p>

            <PostForm postRef={postDoc.ref} defaultValues={post} preview={preview} />
          </section>

          <aside>
            <h3>Tools</h3>
            <button onClick={() => setPreview(!preview)}>{preview ? 'Edit' : 'Preview'}</button>
            <Link href={`/${post.username}/${post.slug}`}>
              <button className="btn-blue">Live view</button>
            </Link>
          </aside>
        </>
      )}
    </main>
  )
}

type Props = { defaultValues: Post, postRef: DocumentReference, preview: boolean }

function PostForm({ defaultValues, postRef, preview }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState
  } = useForm({ defaultValues, mode: 'onChange' })

  const { isValid, isDirty, errors } = formState

  const updatePost = async ({ content, published }: Post) => {

    await updateDoc(postRef, {
      content,
      published,
      updatedAt: serverTimestamp(),
    })

    reset({ content, published })

    toast.success('Post updated successfully!')
  }

  return (
    <form onSubmit={handleSubmit(updatePost)}>
      {preview && (
        <div className="card">
          <ReactMarkdown>{watch('content')}</ReactMarkdown>
        </div>
      )}

      <div className={preview ? styles.hidden : styles.controls}>

        <textarea {...register('content', {
          maxLength: { value: 20000, message: 'content is too long' },
          minLength: { value: 10, message: 'content is too short' },
          required: { value: true, message: 'content is required' }
        })}></textarea>

        {errors?.content && <p className="text-danger">{errors.content.message}</p>}

        <fieldset>
          <input className={styles.checkbox} type="checkbox" {...register('published')} />
          <label>Published</label>
        </fieldset>

        <button type="submit" disabled={!isDirty || !isValid}>
          Save Changes
        </button>
      </div>
    </form>
  )
}