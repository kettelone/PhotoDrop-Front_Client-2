import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ALBUMS_DASHBOARD_ROUTE } from '../../../utils/consts';

const Container =styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height: calc(100vh - 55px);
  overflow: hidden;
`

const FailMessage = styled.div`
display:flex;
justify-content: center;
align-items: center;
font-size:22px;
font-weight:500;
width:80%;
max-width:420px;
height:40px;
border:none;
color:red;
`

const RedirectButton = styled.div`
display:flex;
justify-content: center;
align-items: center;
font-size:18px;
font-weight:500;
cursor: pointer;
width:80%;
max-width:420px;
height:40px;
border-radius:15px;
text-align:center;
background-color:black;
color:white;

&:hover{
  opacity:0.7;
}
`

const PaymentFailed = () => {
  const navigate = useNavigate()
  const goToDashboard = () => {
    navigate(ALBUMS_DASHBOARD_ROUTE)
  }
  return (
    <Container>
      <FailMessage>Payment failed</FailMessage>
      <RedirectButton
      onClick={goToDashboard}
      >Dashboard</RedirectButton>
    </Container>
  );
};

export default PaymentFailed;