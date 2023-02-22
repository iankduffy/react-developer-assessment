import { usePagination } from "hooks/use-pagination"
import styled from "styled-components"

const PaginationList = styled.ul`
  display: flex; 
  gap: 5px; 
  list-style: none;
  padding: 0;
`

const PaginationItem = styled('a')<{current: boolean}>`
  padding: 10px 15px; 
  display: grid; 
  place-items: center; 
  border: 1px solid #eee;
  transition: 500ms;
  ${props => props.current ? 'background-color: #eee;' : ''}
  &:hover {
    background-color: #eee;
  }
`

export function Pagination (): JSX.Element {
  const {
    currentPage = 0,
    totalPages,
    changePage,
  } = usePagination()

  const allPages = Array.from(Array(totalPages).keys()).map(number => ++number)

  return (
    <PaginationList>
      {allPages.map((page, key) => {
        return (
          <li key={key}>
            <PaginationItem 
              current={page === currentPage}
              href={`?page=${page}`}        
              onClick={(event) => {
                event.preventDefault()
                changePage(page)
            }}>
            {page}
            </PaginationItem>
          </li>
        )
      })}
    </PaginationList>
  )
}