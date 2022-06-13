import styled from "styled-components";


export const StyledHeaderFooterTemplated = styled.div`
	display:flex;
	align-items:center;
	text-decoration:none;
	max-width:940px;
	margin:0 auto;
	padding:20px 0px;

	@media(max-width:700px){
		flex-direction:column;
	}

	& > a{
		text-decoration:none;
		color: #FFFFFF;
		font-family: 'Lora', serif;
      font-size: 26px;
		margin-right:auto;
		
		@media(max-width:700px){
		margin:0px;
	   font-size:35px;
	}
	}

	& > nav {
		& > ul{
			padding:0px;
			display:flex;
			flex-wrap:wrap;
			& > li{
				list-style-type: none;
				& > a{
					text-decoration:none;
					color: #FFFFFF;
					font-size: 12px;
					font-family: 'Oxygen', sans-serif;
					padding-left:41px;
					@media(max-width:700px){
						font-size:20px;
						padding:10px;
					}					
				}	
			}
		}
	}
`