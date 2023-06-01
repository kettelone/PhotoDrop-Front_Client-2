import styled from 'styled-components'

const Container = styled.div`
	display: none;
	position: absolute;
	top: 0;
	width: 100%;
	background-color: white;
	font-size: 16px;
	z-index: 3;
`

const Wrapper = styled.div`
	height: 90vh;
	overflow-y: scroll;
`
const SubContainer = styled.div`
	@media only screen and (min-width: 450px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		font-size: 18px;
	}
`
const HeaderContainer = styled.div`
	height: 40px;
	font-weight: 700;
	color: #262626;
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0.9;
`
const CommonCoutries = styled.div`opacity: 0.9;`

const Title = styled.p`
	height: 40px;
	background-color: #f4f4f4;
	margin: 0;
	display: flex;
	align-items: flex-end;
	padding-bottom: 0.25em;
	padding-left: 2.5em;
`

const CloseButton = styled.button`
	background-color: white;
	border: none;
	font-weight: 500;
	width: 75px;
	height: 40px;
	position: absolute;
	right: 0;
	cursor: pointer;
	@media only screen and (min-width: 450px) {
		right: 50%;
		transform: translate(190px);
	}
`

const OneCountry = styled.div`
	display: flex;
	align-items: center;
	height: 40px;
	border-bottom: 1px solid #f1f0ec;
	margin-left: 0.5em;
	cursor: pointer;
	&:hover {
		background-color: rgb(244, 244, 244);
	}
	@media only screen and (min-width: 450px) {
		margin: 0;
	}
`

const SpanCountryName = styled.span`margin-left: 0.75em;`

const Separator = styled.div`
	background-color: #f4f4f4;
	height: 30px;
`
export {
	Container,
	SubContainer,
	HeaderContainer,
	CommonCoutries,
	Title,
	CloseButton,
	OneCountry,
	SpanCountryName,
	Separator,
	Wrapper
}
