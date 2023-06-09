import styled from 'styled-components'

import Button from '../../common/button/Button'

const StyledGoBack = styled.div`background-color: yellow;`

const Wrapper = styled.div`
	position: absolute;
	top: 0;
	background: white;
	z-index: 2;
	width: 100%;
	/* min-height: 700px; */
	height: 100vh;
`

const GoBack = styled.div`
	margin-left: 15px;
	@media only screen and (min-width: 376px) {
		margin-left: 40px;
	}
`

const Container = styled.div``
const TopContainer = styled.div`
	display: flex;
	align-items: baseline;
	align-items: center;
	height: 55px;
	border-bottom: 1px solid #f1f0ec;
	@media only screen and (min-width: 740px) {
		height: 60px;
	}
`
const Name = styled.div`
	font-family: 'Termina Test', sans-serif;
	font-weight: 700;
	font-size: 18px;
	line-height: 21.6px;
	margin-bottom: 5px;
	@media only screen and (min-width: 740px) {
		line-height: 26.4px;
	}
`
const Date = styled.div``
const Amount = styled.div`color: #3300cc;`

const Photo = styled.img`
	width: 100%;
	max-width: 400px;
	object-fit: cover;
	cursor: pointer;
`
const TextWrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	justify-content: center;
	@media only screen and (max-width: 375px) {
		justify-content: flex-start;
		justify-content: none;
	}
`
const TextContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin-left: 38px;
	line-height: 17.95px;
	@media only screen and (max-width: 376px) {
		margin-left: 15px;
		flex-direction: column;
	}
	@media only screen and (min-width: 375px) {
		align-items: baseline;
		max-width: 1200px;
		width: 100%;
	}
`
const DateAmount = styled.div`
	display: flex;
	@media only screen and (max-width: 375px) {
		margin-left: 0px;
		margin-top: 0px;
	}
	@media only screen and (min-width: 450px) {
		margin-left: 38px;
		font-size: 16px;
		line-height: 20.51px;
	}
`

const GridWrapper = styled.div`min-height: 60vh;`

const GridContainer = styled.div`
	display: grid;
	grid-row-gap: 0px;
	justify-content: center;
	grid-template-columns: auto auto auto;
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

const ButtonContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`

const StyledButton = styled(Button)`
font-weight:500;
margin-top:40px;
margin-bottom:40px;
cursor:pointer;
@media only screen and (min-width: 376px) {
		margin-top: 100px;
		margin-bottom: 100px;
		max-width:300px
	}
`

export {
	Wrapper,
	StyledGoBack,
	TopContainer,
	Container,
	Name,
	Date,
	Amount,
	Photo,
	TextWrapper,
	TextContainer,
	DateAmount,
	GridWrapper,
	GridContainer,
	Blur,
	GoBack,
	ButtonContainer,
	StyledButton
}
