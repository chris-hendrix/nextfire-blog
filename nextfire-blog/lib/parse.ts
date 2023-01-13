import { Post } from './types'
export const parsePost = (obj: any): Post => {
  const isPost = (obj: any): obj is Post => {
    // TODO add more checks
    return Object.keys(obj).includes('content')
  }
  if (!isPost(obj)) throw new Error('Server object is not of type Post')
  return obj
}