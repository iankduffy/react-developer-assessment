import { PostStore, postStore } from 'store/posts'
import { Post } from '../post'
import { NotFound } from './not-found'

export function PostListing (): JSX.Element {
  const { posts = [] } = postStore<PostStore>((e) => e)

  if (!posts.length) {
    return <NotFound />
  }

  return (
    <div>
      {posts.map(post => {
        return <Post {...post} key={post.id}/>
      })}
    </div>
  )
}