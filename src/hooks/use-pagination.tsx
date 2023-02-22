import { useEffect, useState } from "react";
import { postStore } from "store/posts";

export const usePagination = () => {
  const { totalPages, currentPage, getPosts, query } = postStore(e => e)

  const isFirstPage = currentPage === 1

  const isLastPage = currentPage === totalPages

  // Update this to use React Router
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