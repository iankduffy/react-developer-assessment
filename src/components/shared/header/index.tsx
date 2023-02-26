import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderDiv = styled.header`
	background: #f8fafc;
	padding: 10px;
`

const Container = styled.div`
	max-width: 1300px;
	margin: 0 auto;
	display: flex; 
	justify-content: space-between;
	width: 100%;
	padding: 10px 0;
`

export function Header(): JSX.Element {
	return (
		<HeaderDiv>
			<Container>
				<div> Logo </div>
				<div>CTA Link</div>
			</Container>
		</HeaderDiv>
	)
}