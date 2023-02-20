
export const queryToString = ({query}) => {
  const searchParams = new URLSearchParams(query)

  return searchParams.toString()
}