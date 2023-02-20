import React, { useEffect } from 'react'
import { Filters } from './filters'
import styled from 'styled-components'
import { ArticleListing } from './articles'
import { postStore } from '../../../store/posts'


const Container = styled.div`
	max-width: 1300px;
	margin: 0 auto;
	width: 100%;
	padding: 10px 0;
  display: grid; 
  grid-template-columns: 1fr 4fr;
`

export function Listing(): JSX.Element {
  const { getPosts, query } = postStore((e) => e)

  useEffect(() => {
    getPosts(query)
  }, [])

  return (
    <Container>
      <Filters />
      <ArticleListing />
    </Container>
  )
}