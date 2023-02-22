import { PostStore, postStore } from "../../../store/posts";
import { Pagination } from "../pagination";
import { Post } from "../posts";
import { SortBy } from "../sortby";
import styled from "styled-components"

const Flex = styled.div`
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
`

// Todo: add types
export function ArticleListing (): JSX.Element {
  const { posts = [] } = postStore<PostStore>((e) => e)

  return (
    <section>
      <Flex>
        <Pagination />
        <SortBy />
      </Flex>
      <div>
        {posts.map(post => {
          return <Post {...post} key={post.id}/>
        })}
      </div>
    </section>
  )
}