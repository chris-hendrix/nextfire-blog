import { useState } from 'react'
import { GetServerSideProps } from 'next'
import { collectionGroup, query, where, getDocs, limit, orderBy, startAfter } from 'firebase/firestore'
import { Post } from '../lib/types'
import { postToJSON, firestore, fromMillis } from '../lib/firebase'

import Metatags from '../components/Metatags'
import PostFeed from '../components/PostFeed'
import Loader from '../components/Loader'

// Max post to query per page
const LIMIT = 1

export const getServerSideProps: GetServerSideProps = async () => {
  const postsQuery = query(
    collectionGroup(firestore, 'posts'),
    where('published', '==', true),
    orderBy('createdAt', 'desc'),
    limit(LIMIT)
  )

  const topPosts = (await getDocs(postsQuery)).docs.map(doc => postToJSON(doc))

  return {
    props: { topPosts }, // will be passed to the page component as props
  }
}

type Props = { topPosts: Array<Post> }

export default function Home({ topPosts }: Props) {
  const [posts, setPosts] = useState(topPosts)
  const [loading, setLoading] = useState(false)

  const [postsEnd, setPostsEnd] = useState(false)

  const getMorePosts = async () => {
    setLoading(true)
    const last = posts[posts.length - 1]

    const cursor = typeof last.createdAt === 'number' ? fromMillis(last.createdAt) : last.createdAt

    const postsQuery = query(
      collectionGroup(firestore, 'posts'),
      where('published', '==', true),
      orderBy('createdAt', 'desc'),
      startAfter(cursor),
      limit(LIMIT)
    )

    const newPosts = (await getDocs(postsQuery)).docs.map((doc) => postToJSON(doc))

    setPosts(posts.concat(newPosts))
    setLoading(false)

    if (newPosts.length < LIMIT) {
      setPostsEnd(true)
    }
  }

  return (
    <main>
      <Metatags />
      <PostFeed posts={posts} />

      {!loading && !postsEnd && <button onClick={getMorePosts}>Load more</button>}

      <Loader show={loading} />

      {postsEnd && 'You have reached the end!'}
    </main>
  )
}
