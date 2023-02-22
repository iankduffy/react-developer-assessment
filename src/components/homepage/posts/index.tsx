import type { PostType } from "types/post";

// {post}: {post: Record<string, unknown>}
export function Post ({title, author, categories} : PostType): JSX.Element {
  return (
    <div>
      <h3>{title}</h3>
      <p>{author.name}</p>
      <p>Tempor do deserunt mollit velit nostrud sunt. Sunt commodo ipsum incididunt et elit. Tempor aute nulla reprehenderit proident cupidatat pariatur. Do velit occaecat eiusmod irure elit exercitation qui cupidatat mollit aliqua dolore. Officia Lorem quis nisi mollit irure nostrud deserunt eiusmod elit Lorem eiusmod. Proident est officia nulla velit aliqua ullamco sint deserunt tempor amet.</p>
      <div>{categories.map((cat) => {
        return (
          <div key={cat.id}>{cat.name}</div>
        )
      })}</div>
    </div>
  )
}