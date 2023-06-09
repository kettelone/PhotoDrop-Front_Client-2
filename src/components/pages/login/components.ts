import styled from 'styled-components'

import Button from '../../common/button/Button'

const Container = styled.div`overflow: hidden;`

const BodyWrapper = styled.div`
	max-width: 100vw;
	position: absolute;
	top: calc(50% + 55px);
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	@media only screen and (min-width: 740px) {
		top: 50%;
		max-width: 420px;
	}
`

const Body = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	@media only screen and (min-width: 740px) {
		font-size: 18px;
	}
`
const Title = styled.div`
	font-family: 'Termina Test', sans-serif;
	text-align: center;
	font-weight: 700;
	color: #262626;
	font-size: 22px;
	@media only screen and (min-width: 740px) {
		font-size: 30px;
		line-height: 36px;
	}
`
const InputLabel = styled.div`
	width: 100%;
	font-weight: 500;
	color: #262626;
	padding: 1em;
	font-size: 18px;
	@media only screen and (min-width: 740px) {
		line-height: 23.08px;
		padding-left: 0px;
		padding-right: 0px;
	}
`
const InputContainer = styled.div`
	display: flex;
	max-width: 100vw;
	padding: 0px 15px;
	@media only screen and (min-width: 740px) {
		max-width: 420px;
		padding: 0px;
	}
`
const CountryInput = styled.span`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 4.35em;
	height: 40px;
	background-color: #f4f4f4;
	border: 1px solid #eeeeee;
	border-radius: 10px;
	cursor: pointer;
`
const StrokeContainer = styled.span`display: flex;`

const FlagSpan = styled.span`display: flex;`

const FlagImg = styled.img`width: 2em;`

const StrokeImg = styled.img``

const NumberContainer = styled.div`
	display: flex;
	align-items: center;
	width: 17.2em;
	height: 40px;
	padding: 15px 13px 14px 13px;
	background-color: #f4f4f4;
	border: 1px solid #eeeeee;
	margin-left: 10px;
	border-radius: 10px;
	font-size: 16px;
	@media only screen and (min-width: 740px) {
		width: 20em;
		font-size: 18px;
	}
`
const Numberinput = styled.input`
	border: none;
	background-color: #f4f4f4;

	&:focus {
		outline: none;
	}
`
const ButtonContainer = styled.div`
	max-width: 100vw;
	display: flex;
	@media only screen and (min-width: 740px) {
	}
`

const StyledButton = styled(Button)`
	font-size:18px;
	font-weight:500;
	&:hover{
		cursor:pointer;
		opacity:0.7;
	}

	@media only screen and (min-width: 740px) {
		max-width:420px;
		font-size:22px;
		line-height:28.2px;
		margin-left:0px;
		margin-right:0px;
	}
`
const ConsentConatainer = styled.div`
	width: 100%;
	color: #6d6d6d;
	font-size: 14px;
	max-width: 420px;
	@media only screen and (min-width: 740px) {
		font-size: 16px;
		margin: 0px;
	}
`
const ConsentP1 = styled.div`
	margin: 0px 1.35em 2.7em 1.15em;
	line-height: 17.95px;
	@media only screen and (min-width: 740px) {
		margin: 0px;
	}
`
const ConsentP2 = styled.div`
	margin: 0px 15px;
	line-height: 17.95px;
	@media only screen and (min-width: 740px) {
		display: none;
		margin: 0px;
	}
`

export {
	ConsentP2,
	ConsentP1,
	ConsentConatainer,
	ButtonContainer,
	NumberContainer,
	Numberinput,
	StrokeImg,
	FlagSpan,
	FlagImg,
	StrokeContainer,
	CountryInput,
	InputContainer,
	InputLabel,
	Title,
	BodyWrapper,
	Body,
	Container,
	StyledButton
}
