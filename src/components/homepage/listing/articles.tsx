import { Pagination } from "../pagination";
import styled from "styled-components"
import { PostListing } from "../post-listing";

const Flex = styled.div`
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
`

export function ArticleListing (): JSX.Element {

  return (
    <section>
      <Flex>
        <Pagination />
      </Flex>
      <PostListing />
    </section>
  )
}