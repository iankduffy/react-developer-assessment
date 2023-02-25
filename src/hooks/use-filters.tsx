import { postStore } from "store/posts";

export const useFilters = () => {
  const { getPosts } = postStore(e => e)

  const addFilter = ({type, value} : {type: string, value: string}) => {
    const params = new URLSearchParams(window.location.search)
    const current = params.get(type.toLowerCase().replaceAll(' ', '-'))?.split(',') || []
    current.push(value.toLowerCase().replaceAll(' ', '-'))
    params.set(type.toLowerCase(), current.join(','))
    const query = Object.fromEntries(params)
    getPosts(query)
  }

  const removeFilter = ({type, value} : {type: string, value: string}) => {
    const params = new URLSearchParams(window.location.search)
    const current = params.get(type.toLowerCase().replaceAll(' ', '-'))?.split(',') || []
    const newParams = current.filter(filter => {
      return filter !== value.toLowerCase().replaceAll(' ', '-')
    })

    if (newParams.length) {
      params.set(type.toLowerCase(), newParams.join(','))
    } else {
      params.delete(type.toLowerCase())
    }
    
    const query = Object.fromEntries(params)
    getPosts(query)
  }

  const isFiltered = ({type, value}: {type: string, value: string}) : boolean  => {
    const params = new URLSearchParams(window.location.search)
    const current = params.get(type.toLowerCase().replaceAll(' ', '-'))?.split(',') || []

    const filtered = current.some(filter => {
      return filter.toLowerCase().replaceAll(' ', '-') === value.toLowerCase().replaceAll(' ', '-')
    })

    return filtered
  }

  return {
    addFilter,
    removeFilter,
    isFiltered
  }
}