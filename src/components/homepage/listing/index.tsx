import React from 'react'
import { Filters } from './filters'
import styled from 'styled-components'
import { ArticleListing } from './articles'

const Container = styled.div`
	max-width: 1300px;
	margin: 0 auto;
	width: 100%;
	padding: 10px 0;
  display: grid; 
  grid-template-columns: 1fr 4fr;
`


export function Listing(): JSX.Element {

  return (
    <Container>
      <Filters />
      <ArticleListing />
    </Container>
  )
}