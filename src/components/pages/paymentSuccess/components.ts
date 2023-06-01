import styled from 'styled-components'
import Button from '../../common/button/Button'

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`

const Container = styled.div`
	font-size: 18px;
	margin: 0 15px;
	max-width: 420px;
`
const Title = styled.div`
	font-family: 'Termina Test', sans-serif;
	line-height: 21.6px;
	font-weight: 700;
	margin-top: 20px;
	margin-bottom: 20px;
	text-align: center;
	@media only screen and (min-width: 740px) {
		font-size: 30px;
		margin-top: 40px;
	}
`
const P1 = styled.div`
	line-height: 23.08px;
	margin-bottom: 19px;
	text-align: left;
	@media only screen and (min-width: 740px) {
		font-size: 22px;
		line-height: 28.2px;
	}
`
const P2 = styled.div`
	line-height: 23.08px;
	margin-bottom: 30px;
	text-align: left;
	@media only screen and (min-width: 740px) {
		margin-bottom: 39px;
		font-size: 22px;
		line-height: 28.2px;
	}
`

const ImageContainer = styled.div`max-width: 420px;`
const Img = styled.img`
	object-fit: cover;
	width: 100%;
	max-height: 250px;
	border-radius: 20px;
`

const StyledButton = styled(Button)`
	margin:0;
	margin-top:30px;
	margin-bottom: 19px;
	font-weight:500;
	cursor:pointer;
	width:100%;
		@media only screen and (min-width: 740px) {
		margin-top: 40px;
		font-size: 22px;
	}
`

const P3 = styled.div`
	text-align: center;
	font-size: 18px;
`

export {
	Wrapper,
	Container,
	Title,
	P1,
	P2,
	P3,
	ImageContainer,
	Img,
	StyledButton
}
