import React from 'react';
import { useNavigate } from 'react-router-dom';

import { MAIN_DASHBOARD_ROUTE } from '../../../utils/consts';
import { Container, FailMessage, RedirectButton } from './components'

const PaymentFailed = () => {
  const navigate = useNavigate()
  const goToDashboard = () => {
    navigate(MAIN_DASHBOARD_ROUTE)
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