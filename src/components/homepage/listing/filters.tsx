// We need a api root to get all authors and all categories
import { useFilters } from 'hooks/use-filters'
import { filtersStore } from 'store/filters'
import styled from 'styled-components'

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
	const { addFilter } = useFilters()

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
									<label key={key}>
										<input type="checkbox" onClick={() => addFilter({type: filters.name.toString(), value: item})}/>
										{item}
									</label>
								)
							})}
						</Filter>
					)
				})}
			</FiltersForm>
		</aside>
	)
}