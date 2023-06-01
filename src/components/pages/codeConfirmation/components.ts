import styled from 'styled-components'
import Button from '../../common/button/Button'

const Wrapper = styled.div`overflow-x: hidden;`

const Container = styled.div`
	max-width: 100vw;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	@media only screen and (min-width: 740px) {
		max-width: 420px;
	}
`

const Title = styled.div`
	display: flex;
	justify-content: center;
	font-family: 'Termina Test', sans-serif;
	font-size: 22px;
	font-weight: 700;
	color: #262626;
	line-height: 26.4px;
	@media only screen and (min-width: 740px) {
		font-size: 30px;
		line-height: 36px;
		padding-left: 0px;
		padding-right: 0px;
	}
`
const SubTitle = styled.div`
	padding: 12px 15px 4px;
	font-size: 16px;
	line-height: 20.51px;
	@media only screen and (min-width: 740px) {
		font-size: 18px;
		line-height: 23.08px;
		padding: 12px 0px 4px;
	}
`
const Phone = styled.span`font-weight: 500;`

const ResendButton = styled.button`
	border: none;
	background: none;
	color: #3300cc;
	font-size: 16px;
	padding: 5px 15px 0px;
	cursor: pointer;

	&[disabled] {
		cursor: none;
	}
	@media only screen and (min-width: 740px) {
		font-size: 18px;
		line-height: 23.08px;
		padding: 5px 0px 0px;
	}
`

const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	@media only screen and (min-width: 740px) {
		&:hover {
			opacity: 0.5;
		}
	}
`

const StyledButton = styled(Button)`
	font-size:18px;
	font-weight:500;
	margin: 1.25em 15px;
	&[disabled] {
		cursor: none;
	}
		@media only screen and (min-width: 740px) {
		margin: 1.25em 0px;	
		font-size:22px;
		line-height:28.2px;
	}
`
const ErrorMessage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 3em;
	text-align: center;
	background-color: rgb(255, 70, 76);
	color: white;
	border-radius: 5px;
	font-size: 16px;
	margin: 0em 0.95em;
	animation: fadeIn 1s;

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`

export {
	Container,
	Title,
	SubTitle,
	Phone,
	ResendButton,
	ButtonContainer,
	StyledButton,
	Wrapper,
	ErrorMessage
}
