export interface PostType {
  id: string
  title: string
  publishDate: string
  author: AuthorType
  summary: string
  categories: Categories[]
}

export interface AuthorType {
  name: string
  avatar: string // Url
}

interface Categories {
  id: string //uuid
  name: string
}