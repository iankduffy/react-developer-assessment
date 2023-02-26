import { AuthorInfo } from "components/shared/posts/author"
import { CategoresList } from "components/shared/posts/categories-list"
import styled from "styled-components"
import { PostType } from "types/post"

const Section = styled.section`
  max-width: 1300px;
  margin: 0 auto;
  text-align: center;
`

export function TitleSection ({title, author, publishDate, categories}: PostType): JSX.Element {
  const formattedDate = new Date(publishDate).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })
  console.log({author})
  return (
    <Section>
      <h1>{title}</h1>
      <p>{formattedDate}</p>
      <AuthorInfo author={author} />
      <CategoresList categories={categories} />
    </Section>
  )
}