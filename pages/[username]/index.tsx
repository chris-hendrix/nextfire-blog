import { GetServerSideProps } from 'next'
import { collection, query, where, getDocs, limit, orderBy } from 'firebase/firestore'
import { getUserWithUsername, postToJSON, firestore } from '../../lib/firebase'
import { User, Post } from '../../lib/types'
import UserProfile from '../../components/UserProfile'
import PostFeed from '../../components/PostFeed'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { username } = context.query

  const userDoc = typeof username === 'string' && await getUserWithUsername(username)

  // JSON serializable data
  let user = null
  let posts = null

  if (userDoc) {
    user = userDoc.data()
    const postsQuery = query(
      collection(firestore, 'posts'),
      where('published', '==', true),
      orderBy('createdAt', 'desc'),
      limit(5)
    )
    posts = (await getDocs(postsQuery)).docs.map(postToJSON)
  }

  return {
    props: { user, posts }, // will be passed to the page component as props
  }
}

type Props = { user: User, posts: Array<Post> }

export default function UserProfilePage({ user, posts }: Props) {
  return (
    <main>
      <UserProfile user={user} />
      <PostFeed posts={posts} />
    </main>
  )
}