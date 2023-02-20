// We need a api root to get all authors and all categories
import styled from 'styled-components'
import { useFetch } from '../../../hooks/use-fetch'
// import { useAsync } from "react-async"



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
	// const {data, loading, error} = useFetch<new Promise<{ data: null; loading: boolean; error: null} >('/api/posts/filterableAttributes')
	// console.log(data, loading, errors)
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