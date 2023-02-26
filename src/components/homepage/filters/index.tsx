// We need a api root to get all authors and all categories
import { filtersStore } from 'store/filters'
import styled from 'styled-components'
import { Checkbox } from './checkbox'

const FiltersForm = styled.form`
		display: flex; 
		flex-direction: column; 
		gap: 20px;
`

const Filter = styled.div`
	display: flex; 
	flex-direction: column; 
	gap: 5px;
`

const Heading = styled.h3`
	margin: 0 0 10px 0;
`

export function Filters(): JSX.Element {
	const { allFilters = [] } = filtersStore(e => e)

	return (
		<aside>
			<FiltersForm>
				{allFilters?.map((filters, key) => {
					const {items} = filters
					return (			
						<Filter key={key}>				
							<Heading>{filters.name}</Heading>
							{items.map((item, key) => {
								
								return (
									<Checkbox key={key} filterType={filters.name.toString()} value={item} />
								)
							})}
						</Filter>
					)
				})}
			</FiltersForm>
		</aside>
	)
}