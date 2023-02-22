import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware';

import methods from '../services/apiService';
import { queryToString } from '../lib/query-string';
import type { PostType } from 'types/post';

export interface PostStore {
  allFilters: unknown[]
  posts: PostType[]
  query: Record<string, unknown>
  isLoading: boolean
  error: unknown
  getPosts: (query: Record<string, string>) => void
  totalPages: number | undefined
  currentPage: number | undefined
}

interface PostReponse {
  posts: PostType[]
  totalPages: number
  currentPage: number
}

export const postStore = create<PostStore>()(
  persist(
    (set, get) => ({
      allFilters: [],
      posts: [],
      query: { page: 1, per_page: 10 },
      totalPages: undefined,
      currentPage: undefined,
      isLoading: false,
      error: undefined,
      getPosts: async(query: Record<'page' | 'per_page', string> ) => {
        try { 
          set(() => ({ isLoading: true }))
          const pushUrl = query ? `?${queryToString({query})}` : ''
          window.history.pushState('', '', pushUrl)
          const { posts, totalPages, currentPage }: PostReponse = await methods.get({
            url: '/api/posts', 
            query
          })
          console.log({posts})
          set(() => ({ posts, totalPages, currentPage, query, isLoading: false }))
        } catch (err) {
          console.log(err)
          set(() => ({ isLoading: false, err }));
        }
      },
    }),
    {
      name: 'post-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
)