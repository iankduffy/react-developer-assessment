import { PostType } from "types/post";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
  justify-content: center;
  padding-inline-start: 0;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  padding: 10px;
  background:rgb(226 232 240);
`

export function CategoresList ({categories}: {categories: PostType['categories']}): JSX.Element {
  return <List>
    {categories.map(cat => {
      return (
        <ListItem key={cat.id}>{cat.name}</ListItem>
      )
    })}
  </List>
}