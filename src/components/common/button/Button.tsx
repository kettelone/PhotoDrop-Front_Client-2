import styled from "styled-components"

const Button = styled.button`
	background-color: #3300cc;
	color: #ffffff;
	width: 21.5em;
	height: 50px;
	border: none;
	border-radius: 50px;
	margin: 1.25em 0.95em;

	@media only screen and (max-width: 355px) {
		width: 18em;
}
`

export default Button