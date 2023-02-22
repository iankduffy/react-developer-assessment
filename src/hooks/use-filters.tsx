import { postStore } from "store/posts";

export const useFilters = () => {
  const { getPosts, query } = postStore(e => e)

  const addFilter = ({type, value} : {type: string, value: string}) => {
    const params = new URLSearchParams(window.location.search)
    const current = params.get(type.toLowerCase().replaceAll(' ', '-'))?.split(',') || []
    current.push(value.toLowerCase().replaceAll(' ', '-'))
    params.set(type.toLowerCase(), current.join(','))
    const query = Object.fromEntries(params)
    getPosts(query)
  }

  return {
    addFilter
  }
}