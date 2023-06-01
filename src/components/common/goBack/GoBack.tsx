import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import arrowLeft from '../../../assets/arrowLeft.svg'

const Container = styled.div`
	position: absolute;
	top: 19px;
	left: 15px;
  cursor: pointer;
`

const GoBack = () => {
  return (
      <Container>
        <img src={arrowLeft} alt="arrow-let " />
      </Container>
  );
};

export default GoBack;