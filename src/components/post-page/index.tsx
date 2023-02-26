import { useLoaderData } from "react-router-dom"
import { PostType } from "types/post"
import { TitleSection } from "./title-section"

export function PostPage (): JSX.Element {
  const post = useLoaderData() as PostType

  return (
    <div>
      <TitleSection {...post} />
    
    </div>
  )
}