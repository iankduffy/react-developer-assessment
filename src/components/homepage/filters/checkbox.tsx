import { useFilters } from 'hooks/use-filters'
import { ChangeEvent } from 'react'
import styled from 'styled-components'

interface Props {
  filterType: string 
  value: string
}

export function Checkbox ({filterType, value}: Props): JSX.Element {
  const { addFilter, removeFilter, isFiltered } = useFilters()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.checked, value)
    if (e.target.checked) {
      addFilter({type: filterType, value})
    } else {
      console.log('remove 2')
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