import styled from 'styled-components'

const Container = styled.div``
const PhotoIcon = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	padding: 8px;
	cursor: pointer;
	@media only screen and (min-width: 450px) {
		padding-right: 33px;
	}
`

const Img = styled.img`
	width: 35px;
	height: 35px;
	border-radius: 50%;
`

const Wrapper = styled.div`margin-bottom: 60px;`

const GraphicsContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 15px;
`

const Graphics = styled.img`
	width: 97px;
	@media only screen and (min-width: 450px) {
		width: 8.5em;
		margin-bottom: 20px;
	}
`

const Title = styled.div`
	font-weight: 500;
	font-size: 22px;
	margin-bottom: 16px;
	margin: 0px 15px 15px 15px;
	text-align: center;
	@media only screen and (min-width: 450px) {
		font-size: 30px;
		margin-bottom: 19px;
	}
`

const SubTitle = styled.div`
	text-align: center;
	font-size: 18px;
	line-height: 23.08px;
	margin: 0px 15px 41px 15px;
	@media only screen and (min-width: 450px) {
		font-size: 22px;
		margin-bottom: 100px;
	}
`

const Separator = styled.div`
	height: 5px;
	background-color: #f4f4f4;
	margin-bottom: 41px;
	@media only screen and (min-width: 450px) {
		display: none;
	}
`

const BrowseTitle = styled.div`
	font-size: 22px;
	font-weight: 500;
	line-height: 28.2px;
	margin: 0px 15px 21px 15px;
	@media only screen and (min-width: 450px) {
		font-size: 30px;
	}
	@media only screen and (min-width: 734px) {
		margin-left: 120px;
	}
`

const PreviewContainer = styled.div`
	display: flex;
	margin-left: 10px;
	overflow-x: scroll;
	@media only screen and (min-width: 734px) {
		margin-left: 120px;
		margin-bottom: 100px;
	}
	@media only screen and (min-width: 734px) {
		overflow: hidden;
	}
`

const PreviewImg = styled.img`
	max-width: 167px;
	height: 216px;
	border-radius: 20px;
	object-fit: cover;
	cursor: pointer;
	margin-left: 5px;
	@media only screen and (min-width: 375px) {
		min-width: 200px;
		height: 255px;
	}
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
export {
	Container,
	PhotoIcon,
	Img,
	Wrapper,
	GraphicsContainer,
	Graphics,
	Title,
	SubTitle,
	Separator,
	BrowseTitle,
	PreviewContainer,
	PreviewImg,
	Blur
}
