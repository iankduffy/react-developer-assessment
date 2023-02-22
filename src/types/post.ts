export interface PostType {
  id: string
  title: string
  publishDate: string
  author: Author
  summary: string
  categories: Categories[]
}

interface Author {
  name: string
  avatar: string // Url
}

interface Categories {
  id: string //uuid
  name: string
}