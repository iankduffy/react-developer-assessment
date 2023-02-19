import styled from "styled-components";
import { Footer } from "../footer";
import { Header } from "../header";

interface Props {
	children: JSX.Element[] | JSX.Element | string
}

const Main = styled.main`
	padding: 20px 10px;
`

export function Layout({children}: Props): JSX.Element {
	return (
		<>
			<Header />
				<Main>
					{children}
				</Main>
			<Footer />
		</>
	)
}