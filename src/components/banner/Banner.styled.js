import styled from "styled-components";
import img from '../../images/banner.png';

export const StyledBanner = styled.div`
	background:url(${img});
	width:100%;
	height:500px;
	position:absolute;
	top:0;
	z-index:-1;
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;


		& > h1{
			font-size: 50px;
			color: #FFFFFF;
			font-family: 'Lora', serif;
			font-weight: 400;
			margin:0px 0px 20px 0px;
			text-align:center;
	   }
      
		& > p{
				color: rgba(255, 255, 255, 0.63);
				font-size: 17px;
				font-family: 'Oxygen', sans-serif;
				margin:0px 0px 31px 0px;
				text-align:center;
		}

		& > button{
			padding:12px 31px;
			background: #DD783F;
			border-radius: 3px;
			color: #FFFFFF;
			font-size: 13px;
			font-family: 'Oxygen', sans-serif;
			cursor: pointer;
		}

`