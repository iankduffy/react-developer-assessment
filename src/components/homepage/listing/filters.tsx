// We need a api root to get all authors and all categories
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
	const data = fetch('/api/posts/filterableAttributes').then(res => res.json())

	console.log(data)
	return (
		<aside>
			<FiltersForm>
				<Filter>
					<Heading>Categories</Heading>
					<label><input type="checkbox"/>Name</label>
					<label><input type="checkbox"/>Name</label>
					<label><input type="checkbox"/>Name</label>
					<label><input type="checkbox"/>Name</label>
				</Filter>
			</FiltersForm>
		</aside>
	)
}