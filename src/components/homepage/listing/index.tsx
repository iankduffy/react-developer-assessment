import { useEffect } from 'react'
import { Filters } from '../filters'
import styled from 'styled-components'
import { ArticleListing } from './articles'
import { postStore } from '../../../store/posts'
import { filtersStore } from 'store/filters'

const Container = styled.div`
	max-width: 1300px;
	margin: 0 auto;
	width: 100%;
	padding: 10px 0;
  display: grid;
  gap: 10px; 
  @media (width >= 700px) {
    grid-template-columns: 1fr 4fr;
  }
`

export function Listing(): JSX.Element {
  const searchParams: Record<string, string> = Object.fromEntries(new URLSearchParams(document.location.search))
  const { getPosts } = postStore((e) => e)
  const { getAllFilters } = filtersStore((e) => e)

  useEffect(() => {
    getPosts(searchParams)
    getAllFilters()
  })

  return (
    <Container>
      <Filters />
      <ArticleListing />
    </Container>
  )
}