import styled from 'styled-components'

const Header = styled.div`
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
const Wrapper = styled.div`
	@media only screen and (min-width: 375px) {
		display: flex;
		justify-content: center;
	}
`

const SubWrapper = styled.div`
	width: 100%;
	max-width: 420px;
`

const OptionContainer = styled.div`display: flex;`
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
const Img = styled.img`width: 25px;`

const TextContainer = styled.div`
	width: 100%;
	margin-left: 10px;
`

const Title = styled.div`
	font-weight: 500;
	margin-bottom: 2px;
	height: 10px;
	margin-bottom: 10px;
`

const Description = styled.div`height: 10px;`

const Green = styled.span`color: green;`

const ArrowWrapper = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
`
const ArrowContainer = styled.div`
	width: 30px;
	display: flex;
	justify-content: center;
`

export {
	Header,
	Wrapper,
	SubWrapper,
	Options,
	Option,
	OptionContainer,
	Title,
	Img,
	Green,
	Description,
	TextContainer,
	ArrowWrapper,
	ArrowContainer
}
