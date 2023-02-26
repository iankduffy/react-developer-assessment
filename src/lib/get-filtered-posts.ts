import { PostType } from "types/post"

interface FilteredPost {
  categories: string | null
  authors: string | null 
  posts: PostType[]
}

export const getFilteredPosts = ({categories, authors, posts}: FilteredPost): PostType[] => {
  const selectedAuthors = authors?.split(',') || []
  const filteredByAuthor = posts.filter(post => {
    if (!selectedAuthors.length) return posts

    return selectedAuthors.every(author => {
      return post.author.name.replaceAll(' ', '-').toLowerCase() === author
    })
  })

  const selectedCategories = categories?.split(',') || []

  const filterByCategoryAndAuthor = filteredByAuthor.filter(post => {
    if (!selectedCategories.length) return filteredByAuthor
    // transform filtered post to categories
    const allPostCategories = post.categories.map(cat => cat.name.replaceAll(' ', '-').toLowerCase())

    // return all post
    return selectedCategories.every(cat => {
      return allPostCategories.includes(cat)
    })
  })
  
  return filterByCategoryAndAuthor
}