import { postStore } from "store/posts";

interface UsePagination {
  isFirstPage: boolean
  isLastPage: boolean
  currentPage: number
  totalPages: number | undefined
  changePage: (number: number) => void
}

export const usePagination = (): UsePagination => {
  const { totalPages, currentPage, getPosts, query } = postStore(e => e)

  const isFirstPage = currentPage === 1

  const isLastPage = currentPage === totalPages

  const changePage = (number: number) => {
    const params = new URLSearchParams(window.location.search)
    params.set('page', number.toString());
    getPosts({...query, page: number.toString()})
  }

  return {
    isFirstPage,
    isLastPage,
    currentPage: Number(currentPage),
    totalPages,
    changePage,
  }
}