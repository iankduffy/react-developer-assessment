import { useFilters } from 'hooks/use-filters'
import { ChangeEvent } from 'react'

interface Props {
  filterType: string 
  value: string
}

export function Checkbox ({filterType, value}: Props): JSX.Element {
  const { addFilter, removeFilter, isFiltered } = useFilters()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      addFilter({type: filterType, value})
    } else {
      removeFilter({type: filterType, value})
    }
  }

  return (
    <label>
      <input type="checkbox" defaultChecked={isFiltered({type: filterType, value})} onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)} />
      {value}
    </label>
  )
}