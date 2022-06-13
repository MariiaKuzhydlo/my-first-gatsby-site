import styled from "styled-components";

export const StyledMostRecent = styled.section`
	display:flex;
	flex-direction:column;
	max-width:940px;
	margin:0 auto;
	align-items:center;
	
	& > h2{
		font-family: 'Oxygen', sans-serif;
		font-size: 20px;
		letter-spacing: 2px;
		color: #2E2E2E;
		font-weight: 400;
		line-height: 27px;
		padding:0px 26px 16px 26px;
		border-bottom:  1px solid #DEDEDE;
		margin:0px 0px 22px 0px;
		}
	}
	
	& > div{
		display: grid;
		grid-template-columns: repeat(3,1fr);
		gap:24px;
		margin: 0px 0px 30px 0px;

		@media(max-width:980px){
			grid-template-columns: repeat(2,1fr);
		}
		
		@media(max-width:700px){
			grid-template-columns: repeat(1,1fr);
		}
	}


`