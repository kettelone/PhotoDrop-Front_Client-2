import styled from 'styled-components'
const MainContainer = styled.div``

const Background = styled.div`
	display: none;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: black;
	opacity: 0.5;
`

const Container = styled.div`
	display: none;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
`

const Wrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 379px;
	height: 653px;
	@media only screen and (max-width: 400px) {
		width: 100vw;
		height: 100vh;
		max-width: 100%;
		max-height: 100vh;
	}
	@media only screen and (max-height: 653px) {
		width: 100vw !important;
		height: 100vh !important;
		max-width: 379px;
		max-height: 100vh;
	}
`
const Img = styled.img`/* width: 100%;
	height: 100%; */`

const TopContainer = styled.div``
const Title = styled.div`
	color: white;
	position: fixed;
	left: 50%;
	transform: translate(-50%);
	margin-top: 22px;
	z-index: 2;
	font-size: 18px;
	font-weight: 500;

	@media (max-width: 400px) and (max-height: 550px) {
		margin-top: 4rem;
	}
`

const CloseButton = styled.button`
	position: fixed;
	z-index: 2;
	background: none;
	border: none;
	margin-top: 22px;
	margin-left: 15px;
	padding: 0px;
	cursor: pointer;
	@media (max-width: 400px) and (max-height: 550px) {
		margin-top: 4rem;
	}
`
const Instruction = styled.div`
	font-size: 16px;
	position: fixed;
	z-index: 2;
	color: white;
	position: fixed;
	left: 50%;
	transform: translate(-50%);
	margin-top: 130px;
	width: 100%;
	text-align: center;
	@media only screen and (max-height: 650px) {
		margin-top: 22vh;
	}
	@media only screen and (max-height: 545px) {
		margin-top: 20vh;
	}
	@media only screen and (max-height: 500px) {
		margin-top: 18vh;
	}
`

const ButtonsContainer = styled.div`
	display: flex;
	position: fixed;
	bottom: 0;
	right: 50%;
	transform: translate(50%);
	margin-bottom: 60px;
	justify-content: space-between;
	max-width: 100%;
	padding: 0px 15px;
`

const StyledButton =
	styled.label <
	{ color: string, backgroundColor: string } >
	`
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.backgroundColor || 'none'};
    color: ${(props) => props.color || 'white'};
    border-radius: 50px;
    max-width: 169.64px;
    width:9.5em;
    max-height: 50px;
    height: 3.5em;
    border: 1px solid white;
    font-weight: 500;
    font-size: 18px;
		cursor:pointer;
   @media only screen and (max-width: 355px) {
		max-width: 169.64px;
      width:8.5em;
   }

	 	@media only screen and (min-width: 740px) {
		&:hover{
		background-color:white;
		color:#262626;
	 }
	}
  `

const StyledButton1 = styled(StyledButton)`
	 	@media only screen and (min-width: 740px) {
	 &:hover{
		background-color:#262626;
		color:white;
	 }
	}
	`

const Span = styled.span`
	max-width: 9.7px;
	width: 0.75em;
`
const Input = styled.input`display: none;`
export {
	MainContainer,
	Background,
	Container,
	Wrapper,
	Img,
	Title,
	TopContainer,
	CloseButton,
	Instruction,
	ButtonsContainer,
	StyledButton,
	StyledButton1,
	Span,
	Input
}
