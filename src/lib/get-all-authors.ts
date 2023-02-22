import { PostType } from "types/post"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getAllAuthors = async (posts:  PostType[]) => {
  const authors = posts.map((post, index) => {
    return post['author'].name
  })
  
  const removeDub = authors.filter((author, index) => {
    return authors.indexOf(author) === index
  })

  return removeDub
}