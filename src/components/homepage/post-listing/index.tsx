import { PostStore, postStore } from 'store/posts'
import { Post } from '../post'
import { NotFound } from './not-found'
import styled from 'styled-components'

const List = styled.ul`
  display: grid; 
  gap: 10px;
`

export function PostListing (): JSX.Element {
  const { posts = [] } = postStore<PostStore>((e) => e)

  if (!posts.length) {
    return <NotFound />
  }

  return (
    <List>
      {posts.map(post => {
        return <Post {...post} key={post.id}/>
      })}
    </List>
  )
}