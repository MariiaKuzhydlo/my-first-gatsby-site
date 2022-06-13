import styled from "styled-components";
import bgr from "../../images/footerBack.png"

export const StyledPageContainer = styled.div`
   display:flex;
	flex-direction:column;
	
	& > main{
		flex-grow:1;
	}

   & > header{
		margin: 0px 0px 460px 0px;

		@media(max-width:700px){
			margin: 0px 0px 424px 0px;
		}
	} 
   
	& > footer {
		background: url(${bgr}) rgba(35, 47, 56, 0.6);
	
	}

`