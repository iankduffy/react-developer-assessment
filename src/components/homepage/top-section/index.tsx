import styled from 'styled-components'


const Container = styled.div`
	max-width: 1300px;
	margin: 0 auto;
	width: 100%;
	padding: 10px 0;
`
const Paragraph = styled.p`
	max-width: 800px;
`

export function TopSection(): JSX.Element {
	return (
		<Container>
			<h1>Home Page</h1>
			<Paragraph>Est dolor voluptate nostrud voluptate ad sunt officia id est. Nostrud culpa quis sit nisi. Duis enim exercitation deserunt ullamco mollit pariatur consequat velit. Voluptate reprehenderit tempor consequat aliquip tempor esse ex labore cillum adipisicing anim laborum sunt. Et ex ipsum amet occaecat.</Paragraph>
		</Container>
	)
}