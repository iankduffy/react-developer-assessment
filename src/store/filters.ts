import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware';

export interface FiltersStore {
  isLoading: boolean
  allFilters: Record<string, unknown[]>[]
  error: unknown
  getAllFilters: () => void
}

export const filtersStore = create<FiltersStore>()(
  persist(
    (set, get) => ({ 
      allFilters: [], 
      isLoading: false, 
      error: undefined,
      getAllFilters: async () => {
        try {
          set(() => ({ isLoading: true }))
          const data = await fetch('/api/posts/filterableAttributes')
          const allFilters: Record<string, unknown[]>[] = await data.json()
          set(() => ({ allFilters, isLoading: false }))
        } catch (err) {
          console.log(err)
          set(() => ({ isLoading: false, err }));
        }
      }
    }),
    {
      name: 'filters-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
)