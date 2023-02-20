// Todo: Fix this typescript issue, we need to create a post type

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getAllCategories = async (posts:  Record<string, unknown>[]) => {
  const categories = posts.map((post, index) => {
    const postCat = post['categories']
    const catNames = postCat.map(cat => cat.name)
    return catNames
  })

  const flattened = categories.flatMap(name => name);
  
  const removeDub = flattened.filter((cat, index) => {
    return flattened.indexOf(cat) === index
  })

  return removeDub
}