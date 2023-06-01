import React, { useState, useEffect } from 'react';
import {LOGIN_ROUTE, PROFILE_ROUTE } from '../../../utils/consts';
import { Wrapper, Container,Title, Input, StyledButton,} from './components'
import accountService from '../../../service/accountService';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import checkToken from '../../../utils/checkJWT'
import GoBack from '../../common/goBack/GoBack';


const EditEmail = () => {

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
        navigate(PROFILE_ROUTE)
        setIsLoading(false)
      }
    }
  }

  return (
    <Wrapper>
      <span onClick={() => navigate(-1)}>
        <GoBack />
      </span>
      <Container>
          <Title>Your email</Title>
        <Input
          placeholder='example@gmail.com'
          onChange={handleChange}
        />
        <StyledButton
          style={{ opacity: email.length >= 3 ? 1 : 0.5 }}
          disabled={email.length >= 3 ? false : true}
          onClick={saveEmail}
        >{
            isLoading
              ? <FontAwesomeIcon icon={faSpinner} className="spinner" />
              : 'Save'
          }
        </StyledButton>
      </Container>
    </Wrapper>
  );
};

export default EditEmail;
