import styled from "styled-components"

const Section = styled.section`
  text-align: center;
  font-size: 2rem;
  padding: 5rem 2rem;
  border: dashed 1px black;
  border-radius: 10px;
`

export function NotFound(): JSX.Element {
  return (
    <Section>No Articles Found</Section>
  )
}