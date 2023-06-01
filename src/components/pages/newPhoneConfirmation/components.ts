import styled from 'styled-components'

const Wrapper = styled.div`overflow-x: hidden;`

const Container = styled.div`
	max-width: 100vw;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
`

const Title = styled.div`
	display: flex;
	justify-content: center;
	font-family: 'Termina Test', sans-serif;
	font-size: 22px;
	font-weight: 700;
	color: #262626;
`
const SubTitle = styled.div`
	padding: 14px 15px 4px;
	font-size: 16px;
`
const Phone = styled.span`font-weight: 500;`

const ResendButton = styled.button`
	border: none;
	background: none;
	color: #3300cc;
	font-size: 16px;
	padding: 4px 15px 0px;
	cursor: pointer;
`

const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
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
	Wrapper,
	ErrorMessage
}
