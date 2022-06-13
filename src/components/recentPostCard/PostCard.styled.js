import styled from "styled-components";

export const StyledCard = styled.article`
	display:flex;
	flex-direction:column;
	justify-content:space-between;
	background-color:#FFFFFF;
	

	@media(max-width:700px){
		border: 2px solid  #DEDEDE;
	}
	
   & > img{
		margin:0px 0px 14px;
	}

	& > h3{
		padding:0px 0px 0px 13px;
		margin:0px 0px 6px 0px;
		color: #101315;
		font-size: 16px;
      line-height: 21px;
		font-weight: 400;
	}
	& > p{
		padding:0px 13px;
		margin:0px 0px 12px 0px;
		color: #7A7A7A;
		font-size: 13px;
		font-family: 'Oxygen', sans-serif;
	}

	& > div {
		background: #FCFCFC;
		border-top:1px solid  #EFEFEF;
		display:flex;
		justify-content:space-between;
		align-items:center;
		min-height:48px;
		padding: 0px 13px;
		color: #999999;
		& > div{
			display:flex;
			align-items:center;
			& > img{
				max-width:26px;
				margin:0px 10px 0px 0px;
			}
		}
	}

`