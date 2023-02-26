import { AuthorType, PostType } from "types/post";
import styled from "styled-components";

const AuthorContainer = styled.div`
  display: flex; 
  gap: 10px; 
  align-items: center;
  justify-content: center;
`

const Image = styled.img`
  border-radius: 50%;
  overflow: hidden;
`

const AuthorName = styled.p`
  font-weight: bold; 
  font-size: 1.1em;
`

export function AuthorInfo ({author}: {author: AuthorType}) : JSX.Element {
  return (
    <AuthorContainer>
      <Image src={author.avatar} loading={'eager'} />
      <AuthorName>{author.name}</AuthorName>
    </AuthorContainer>
  )
}