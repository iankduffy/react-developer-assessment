


export const queryToString = ({query}: {query: Record<string, string>}): string => {
  const searchParams = new URLSearchParams(query)

  return searchParams.toString()
}