import styled from 'styled-components'
const Container = styled.div`
	padding: 20px 15px;
	display: flex;
	justify-content: center;
	width: 100%;
`
const SubContainer = styled.div`
	max-width: 700px;
	width: 100%;
`
const Title = styled.div`
	font-weight: 700;
	font-size: 18px;
	font-family: 'Termina Test', sans-serif;
	text-align: center;
	line-height: 21.6px;

	@media only screen and (min-width: 740px) {
		font-size: 30px;
		margin-bottom: 10px;
	}
`
const P = styled.p`
	font-size: 16px;
	margin-bottom: 16px;
	margin-top: 5px;
	line-height: 20.51px;
	@media only screen and (min-width: 740px) {
		font-size: 18px;
		line-height: 23.08px;
	}
`
const SubTitle = styled.p`
	font-size: 16px;
	font-weight: 700;
	margin: 0px;
	@media only screen and (min-width: 740px) {
		font-size: 18px;
	}
`

const PhotoIcon = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	cursor: pointer;
	margin-right: 15px;
	margin-top: 10px;

	@media only screen and (min-width: 740px) {
		margin-right: 33px;
		margin-top: 12.5px;
	}
`
const Img = styled.img`
	width: 35px;
	height: 35px;
	border-radius: 50%;
`
export { Container, SubContainer, Title, SubTitle, P, PhotoIcon, Img }
