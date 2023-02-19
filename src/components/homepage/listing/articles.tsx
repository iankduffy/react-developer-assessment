import { Pagination } from "../pagination";
import { Post } from "../posts";
import { SortBy } from "../sortby";


export function ArticleListing (): JSX.Element {
  return (
    <section>
      <div>
        <Pagination />
        <SortBy />
      </div>
      <div>
        {Array.from(Array(10).keys()).map(post => {
          return <Post />
        })}
      </div>
      {/* Top bar with pagination and sort  */}
    </section>
  )
}