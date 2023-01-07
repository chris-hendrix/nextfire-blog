import styles from '../../styles/Post.module.css'
import { GetStaticProps, GetStaticPaths } from 'next'
import { collection, doc, getDocs, getDoc, collectionGroup } from 'firebase/firestore'
import { firestore, getUserWithUsername, postToJSON } from '../../lib/firebase'
import { Post } from '../../lib/types'
import { getParam } from '../../lib/firebase'


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const username = getParam('username', params)
  const slug = getParam('slug', params)
  const userDoc = await getUserWithUsername(username)

  let post = null
  let path = null

  if (userDoc) {
    const postRef = doc(collection(userDoc.ref, 'posts'), slug)
    post = postToJSON(await getDoc(postRef))

    path = postRef.path
  }

  return {
    props: { post, path },
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

export default function Post() {

  return (
    <main className={styles.container}>

    </main>
  )
}


