export const paginate = (array: unknown[], page_size: number, page_number: number): unknown[] => {
  return array.slice(page_number * page_size, page_number * page_size + page_size)
}