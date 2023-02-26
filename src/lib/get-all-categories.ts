
import { PostType } from "types/post"

export const getAllCategories = async (posts:  PostType[]): Promise<string[]>  => {
  const categories = posts.map((post, index) => {
    const postCat = post['categories']
    const catNames = postCat.map(cat => cat.name)
    return catNames
  })

  const flattened = categories.flatMap(name => name);
  
  const removeDub = flattened.filter((cat, index) => {
    return flattened.indexOf(cat) === index
  })

  console.log(removeDub)

  return removeDub
}