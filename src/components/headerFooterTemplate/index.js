import { Link } from "gatsby";
import React from "react";
import { StyledHeaderFooterTemplated } from "./HeaderFooterTemplate.styled";

const HeaderFooterTemplate = () => {
	return (
		<StyledHeaderFooterTemplated>
			<Link to="#">Escape.</Link>
			<nav>
				<ul>
					<li>
						<Link to="#">Home</Link>
					</li>
					<li>
						<Link to="#">Categories</Link>
					</li>
					<li>
						<Link to="#">About</Link>
					</li>
					<li>
						<Link to="#">Contact</Link>
					</li>
				</ul>
			</nav>
		</StyledHeaderFooterTemplated>
	)
}

export default HeaderFooterTemplate