import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware';

export interface PaginationStore {
  isLoading: boolean
  noOfPage: number
  getNumberOfPages: () => Promise<void>
  error: unknown
  // getAllFilters: () => void
}

export const paginationStore = create<PaginationStore>()(
  persist(
    (set, get) => ({ 
      isLoading: false, 
      error: undefined,
      noOfPage: 0,
      getNumberOfPages: async() => {
        try {
          set(() => ({ isLoading: true }))
          const response = await fetch('/api/posts/length')
          const numberOf = await response.json()

          set(() => ({ noOfPage: numberOf, isLoading: false }))
          return numberOf
        } catch (err) {
          console.log(err)
          set(() => ({ isLoading: false, error: err }));
        }
      }, 
    }),
    {
      name: 'filters-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
)