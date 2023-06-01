import styled from 'styled-components'

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
`

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 23em;
	@media only screen and (min-width: 740px) {
		width: 22%;
		min-width: 500px;
	}
`
const Welcome = styled.div`
	font-weight: 700;
	font-size: 18px;
	font-family: 'Termina Test', sans-serif;
	text-align: center;
	margin-top: 22px;
	margin-bottom: 20px;
	@media only screen and (min-width: 740px) {
		font-size: 30px;
	}
`

const YourSelfie = styled.div`
	font-weight: 500;
	font-size: 16px;
	margin: 0px 15px 15px;
	@media only screen and (min-width: 740px) {
		font-size: 18px;
	}
`

const SelfieContainer = styled.div`
	display: flex;
	align-items: flex-end;
	padding: 15px;
`

const Img = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 50%;
`

const Pen = styled.img`cursor: pointer;`

const LoaderWrapper = styled.div`
	position: absolute;
	left: 0;
`
const Blur = styled.div`
	position: fixed;
	top: 0;
	height: 100%;
	width: 100%;
	background: rgba(
		white 0.9
	); // Make sure this color has an opacity of less than 1
	backdrop-filter: blur(5px); // This be the blur
	z-index: 2;
`

const IconContainer = styled.label`
	border-radius: 50%;
	background-color: #3300cc;
	border: 2px solid white;
	width: 36.5px;
	height: 36.5px;
	margin-left: -20px;
	display: flex;
	justify-content: center;
	align-items: center;
`
const Input = styled.input`display: none;`

const Options = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0em 0.925em 0.925em;
`
const Option = styled.div`
	display: flex;
	justify-content: space-between;
	border: 1px solid #ceccb5;
	border-radius: 10px;
	height: 50px;
	padding: 6px 0px 9px 15px;
	font-size: 14px;
	line-height: 17.95px;
	margin-bottom: 5px;
	cursor: pointer;

	@media only screen and (max-width: 340px) {
		font-size: 12px;
	}
	@media only screen and (min-width: 740px) {
		height: 53px;
		font-size: 16px;
		line-height: 20.51px;
	}
`
const Title = styled.div`
	font-weight: 500;
	margin-bottom: 2px;
	height: 10px;
	margin-bottom: 10px;
`

const Description = styled.div`height: 10px;`

const ArrowWrapper = styled.div`
	display: flex;
	align-items: center;
`
const ArrowContainer = styled.div`
	width: 30px;
	display: flex;
	justify-content: center;
`

export {
	Wrapper,
	Container,
	Welcome,
	YourSelfie,
	SelfieContainer,
	Img,
	Pen,
	Blur,
	IconContainer,
	Input,
	Options,
	Option,
	Title,
	Description,
	ArrowWrapper,
	ArrowContainer,
	LoaderWrapper
}
