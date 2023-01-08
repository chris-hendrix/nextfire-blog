import styles from '../../styles/PostPage.module.css'
import { GetStaticProps, GetStaticPaths } from 'next'
import { useDocument } from 'react-firebase-hooks/firestore'
import { doc, getDocs, collectionGroup } from 'firebase/firestore'
import { firestore, getUserDocByUsername, getPostDocBySlug, postToJSON } from '../../lib/firebase'
import { Post } from '../../lib/types'
import { getParam } from '../../lib/firebase'
import PostContent from '../../components/PostContent'


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const username = getParam('username', params)
  const slug = getParam('slug', params)
  const userDoc = await getUserDocByUsername(username)
  const postDoc = userDoc && await getPostDocBySlug(userDoc.ref, slug)

  let serverPost = null
  let path = null

  if (postDoc) {
    serverPost = postToJSON(postDoc)
    path = postDoc.ref.path
  }

  return {
    props: { serverPost, path },
    revalidate: 5000,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Improve my using Admin SDK to select empty docs
  const snapshot = await getDocs(collectionGroup(firestore, 'posts'))

  const paths = snapshot.docs.map((doc) => {
    const { slug, username } = doc.data()
    return {
      params: { username, slug },
    }
  })

  return {
    // must be in this format:
    // paths: [
    //   { params: { username, slug }}
    // ],
    paths,
    fallback: 'blocking',
  }
}

type Props = { path: string, serverPost: Post }

export default function PostPage({ path, serverPost }: Props) {
  const postRef = doc(firestore, path)
  const [realtimePostDoc] = useDocument(postRef)
  const realtimePost = realtimePostDoc && postToJSON(realtimePostDoc)
  const post = realtimePost || serverPost

  return (
    <main className={styles.container}>

      <section>
        <PostContent post={post} />
      </section>

      <aside className="card">
        <p>
          <strong>{post.heartCount || 0} 🤍</strong>
        </p>

      </aside>
    </main>
  )
}


