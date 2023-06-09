import React from 'react'

import styled from 'styled-components'

import Button from '../../common/button/Button'

const Wrapper = styled.div``

const Container = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0px 15px;
`
const TitleWrapper = styled.div`display: flex;`

const Title = styled.div`
	font-family: 'Termina Test', sans-serif;
	font-weight: 700;
	font-size: 18px;
	color: #262626;
	margin-bottom: 20px;
	@media only screen and (min-width: 740px) {
		font-size: 30px;
	}
`

const Input = styled.input`
	border-radius: 10px;
	background-color: #f4f4f4;
	height: 40px;
	border: 1px solid #eeeeee;
	width: 100%;
	max-width: 345px;
	padding: 15px 13px 14px 13px;
	margin-bottom: 21px;
	@media only screen and (min-width: 740px) {
		max-width: 420px;
	}
`

const StyledButton = styled(Button)`
  margin:0px;
  width: 100%!important;
  max-width:345px;
		@media only screen and (min-width: 740px) {
		max-width: 420px;
	}
`

const TermsNConditions = styled.div`
	padding: 0px 15px;
	position: absolute;
	left: 50%;
	bottom: 0;
	padding-bottom: 40px;
	max-width: 420px;
	width: 100%;
	font-size: 14px;
	line-height: 17.95px;
	color: #6d6d6d;
	transform: translate(-50%);
`

const Line = styled.p`margin: 0px;`

export {
	Wrapper,
	Container,
	TitleWrapper,
	Title,
	Input,
	StyledButton,
	Line,
	TermsNConditions
}
