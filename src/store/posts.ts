import { create } from 'zustand'
import qs from 'query-string'
import { createJSONStorage, persist } from 'zustand/middleware';

import methods from '../services/apiService';
import { queryToString } from '../lib/query-string';

const initialStore = {
  data: [],
  cached_users_details: [],
  query: { page: 1, per_page: 20 },
  isLoading: false,
  error: undefined,
}

export const postStore = create(
  persist(
    (set, get) => ({ 
      data: [],
      cached_users_details: [],
      query: { page: 1, per_page: 20 },
      isLoading: false,
      error: undefined,
      getPosts: async(query: any) => {
        try { 
          set(() => ({ isLoading: true }))
          window.history.pushState('', '', `?${queryToString({query})}`)
          const data = await methods.get({
            url: '/api/posts', 
            query: {}
          })
          set(() => ({ data, query, isLoading: false }));
        } catch (err) {
          console.log(err)
          set(() => ({ isLoading: false, err }));
        }
      }
    }),
    {
      name: 'post-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
)