import styled from 'styled-components'
import Button from '../../../components/common/button/Button'

const Container = styled.div`
	background-color: #262626;
	color: white;
	padding: 0px 15px;
	@media only screen and (min-width: 734px) {
		display: flex;
		justify-content: center;
		padding: 3.75em 0 40px;
	}
`

const FirstContainer = styled.div`
	@media only screen and (min-width: 734px) {
		max-width: 35%;
		margin-right: 2em;
	}
	margin-bottom: 20px;
`

const Title = styled.div`
	font-family: 'Termina Test', sans-serif;
	font-size: 18px;
	padding-top: 60px;
	margin-bottom: 15px;
	@media only screen and (min-width: 734px) {
		padding-top: 0px;
	}
`
const Frameology = styled.div`margin-bottom: 23px;`
const Mission = styled.div`
	font-size: 15px;
	line-height: 20.51px;
	font-weight: 400;
	letter-spacing: -2%;
	margin-bottom: 39px;
`
const Questions = styled.div`
	margin-bottom: 30px;
	cursor: pointer;
	&:hover {
		text-decoration: underline;
	}
	@media only screen and (min-width: 734px) {
		margin-bottom: 25px;
	}
`

const Img = styled.img`
	max-width: 150px;
	cursor: pointer;
`
const FakeButton = styled(Button)`
  background-color:#262626;
  color:white;
  border:1px solid white;
  margin:0;
  margin-bottom:60px;
  font-size:18px;
  font-weight:500;
  width: 19em!important;
  max-width: 345px!important;
		cursor:pointer;
	&:hover{
		opacity:0.6
	}
		@media only screen and (min-width: 375px) {
		max-width:300px!important;
	}
		@media only screen and (max-width: 355px) {
		max-width:100%!important;
	}
`
const Copyright = styled.div`
	margin-bottom: 19px;
	@media only screen and (min-width: 375px) {
		display: none;
	}
`
const Copyright1 = styled.div`
	margin-bottom: 19px;
	display: none;
	@media only screen and (min-width: 375px) {
		display: block;
	}
`

const LinksContainer = styled.div``
const Link1 = styled.div`
	cursor: pointer;
	margin-bottom: 20px;
	&:hover {
		text-decoration: underline;
	}
`

const Link2 = styled.div`
	cursor: pointer;
	&:hover {
		text-decoration: underline;
	}
`
const SecondContainer = styled.div`
	padding-bottom: 134px;
	@media only screen and (min-width: 734px) {
		margin-left: 2em;
	}
`

export {
	Container,
	FirstContainer,
	Title,
	Frameology,
	Mission,
	Questions,
	Img,
	FakeButton,
	Copyright,
	Copyright1,
	LinksContainer,
	Link1,
	Link2,
	SecondContainer
}
