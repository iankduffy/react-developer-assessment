
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getAllAuthors = async (posts:  Record<string, unknown>[]) => {
  const authors = posts.map((post, index) => {
    return post['author']
  })
  
  const removeDub = authors.filter((author, index) => {
    return authors.indexOf(author) === index
  })

  console.log(authors, removeDub)

  return removeDub
}