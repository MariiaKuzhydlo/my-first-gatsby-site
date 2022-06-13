import React from "react";
import HeaderFooterTemplate from "../headerFooterTemplate";
import { StyledPageContainer } from "./PageContainer.styled";

const PageContainer = (props) => {
	return (
		<StyledPageContainer >
			<header>
				<HeaderFooterTemplate />
			</header>
			<main>
				{props.children}
			</main>
			<footer>
				<HeaderFooterTemplate />
			</footer>
		</StyledPageContainer>
	)
}

export default PageContainer