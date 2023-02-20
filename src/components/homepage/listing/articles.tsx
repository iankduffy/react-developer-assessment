import { useEffect } from "react";
import { postStore } from "../../../store/posts";
import { Pagination } from "../pagination";
import { Post } from "../posts";
import { SortBy } from "../sortby";

// Todo: add types
export function ArticleListing (): JSX.Element {
  const { data } = postStore((e) => e)
  const { posts = [] } = data

  return (
    <section>
      <div>
        <Pagination />
        <SortBy />
      </div>
      <div>
        {posts.map((post, key) => {
          return <Post {...post} key={post.id}/>
        })}
      </div>
      {/* Top bar with pagination and sort  */}
    </section>
  )
}