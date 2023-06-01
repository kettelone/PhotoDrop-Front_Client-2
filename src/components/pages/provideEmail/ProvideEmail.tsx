import React, { useState, useEffect } from 'react';
import { ALBUMS_DASHBOARD_ROUTE, LOGIN_ROUTE } from '../../../utils/consts';
import { Wrapper,Container, TitleWrapper, Title, Input, StyledButton, Line, TermsNConditions } from './components'
import accountService from '../../../service/accountService';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import hey from './hey.svg'
import checkToken from '../../../utils/checkJWT';


const ProvideEmail = () => {
  
  useEffect(() => {
    const isLoggedIn = checkToken()
    if (!isLoggedIn) {
      navigate(LOGIN_ROUTE)
    }
  }, [])

  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)


  const handleChange = (e: any) => {
    setEmail(e.target.value)
  }

  const saveEmail = async () => {
    setIsLoading(true)
    if (email) {
      const response = await accountService.editEmail(email)
      if (response) {
        navigate(ALBUMS_DASHBOARD_ROUTE)
        setIsLoading(false)
      }
    }
  }

  return (
    <Wrapper>
      <Container>
        <TitleWrapper>
        <Title>
          <Line>Hey there,</Line>
          <Line>Guest</Line>
          </Title>
          <img src={hey} alt="hey" />
        </TitleWrapper>
        <Input
          placeholder='What’s your email?'
          onChange={handleChange}
        />
        <StyledButton
          style={{ opacity: email.length >= 3 ? 1 : 0.5 }}
          disabled={email.length >= 3 ? false : true}
          onClick={saveEmail}
        >{
            isLoading
          ? <FontAwesomeIcon icon={faSpinner} className="spinner" />
          : 'See your photos!'
          }
        </StyledButton>
      </Container>
      <TermsNConditions>
        By continuing, you indicate that you have read and agree to our <u>Terms of Use</u> & <u>Privacy Policy</u>
      </TermsNConditions>
    </Wrapper>
  );
};

export default ProvideEmail;
