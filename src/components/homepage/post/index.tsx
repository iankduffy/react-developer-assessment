import type { PostType } from "types/post";
import { Link } from "react-router-dom";
import { AuthorInfo } from "components/shared/posts/author";
import { CategoresList } from "components/shared/posts/categories-list";
import styled from 'styled-components'

const StyledLink = styled.li`
  text-align: center; 
  list-style: none;
  padding-bottom: 30px;

  &:not(:last-of-type) {
    border-bottom: 1px solid rgb(228 228 231);
  }

  a {
    color: rgb(24 24 27);
    text-decoration: none;
    transitiion: 500ms;

    &:hover {
      color: rgb(63 63 70);
    }
  }
`

export function Post ({title, author, categories, id} : PostType): JSX.Element {
  return (
    <StyledLink>
      <Link to={`/post/${id}`}>
          <h3>{title}</h3>
          <AuthorInfo author={author}/>
          <p>Tempor do deserunt mollit velit nostrud sunt. Sunt commodo ipsum incididunt et elit. Tempor aute nulla reprehenderit proident cupidatat pariatur. Do velit occaecat eiusmod irure elit exercitation qui cupidatat mollit aliqua dolore. Officia Lorem quis nisi mollit irure nostrud deserunt eiusmod elit Lorem eiusmod. Proident est officia nulla velit aliqua ullamco sint deserunt tempor amet.</p>
          <CategoresList categories={categories}/>
      </Link>      
    </StyledLink>
  )
}