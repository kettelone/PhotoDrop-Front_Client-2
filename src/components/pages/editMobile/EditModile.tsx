import React, { useState, ChangeEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import stroke from '../../../assets/stroke.svg'
import CountrySelect from '../../modals/countrySelect/CountrySelect';
import { useAppSelector } from '../../../app/hooks'
import loginService from '../../../service/loginService';
import { CONFIRM_EDIT_PHONE_ROUTE, LOGIN_ROUTE } from '../../../utils/consts'
import { updateFullNumber } from '../../../app/countrySlice/countrySlice'
import { useAppDispatch } from '../../../app/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import checkToken from '../../../utils/checkJWT';
import GoBack from '../../common/goBack/GoBack';
import accountService from '../../../service/accountService';

import {
  ButtonContainer,
  NumberContainer,
  Numberinput,
  StrokeImg,
  FlagImg,
  StrokeContainer,
  CountryInput,
  InputContainer,
  InputLabel,
  Title,
  Body,
  Container,
  StyledButton,
  FlagSpan
} from './components'


const EditPhone = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const isLoggedIn = checkToken()
    if (!isLoggedIn) {
      navigate(LOGIN_ROUTE)
    }
  }, [])

  const { country, dial_code } = useAppSelector(state => state.countryUpdate)
  const [digits, setDigits] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useAppDispatch()

  const handlePhoneNumber = (event: ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9\b]+$/;
    if (event.target.value === '' || regex.test(event.target.value)) {
      setDigits(event.target.value)
    }
  }

  const hanleCountry = () => {
    document.getElementById('countryModal')?.classList.add('show')
  }

  const handleChange = async () => {
    if (dial_code && digits.length <= 10 && digits.length >= 9) {
      setIsLoading(true)
      const fullNumber = `${dial_code.substring(1)}${digits}`
      dispatch(updateFullNumber({ fullNumber }))
      localStorage.setItem('phoneNumber', fullNumber)
      const response = await accountService.editPhone(fullNumber)
      // await loginService.requestOtp(fullNumber)
      setIsLoading(false)
      navigate(CONFIRM_EDIT_PHONE_ROUTE)
    }
  }

  return (
    <Container>
      <span onClick={() => navigate(-1)}>
        <GoBack />
      </span>
      <CountrySelect />
      <Body>
        <Title>Mobile number</Title>
        <InputLabel>Update your number and we’ll send a verification code to this number.</InputLabel>
        <InputContainer>
          <CountryInput
            onClick={hanleCountry}
          >
            <FlagSpan>
              <FlagImg
                src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${country}.svg`}
              />
            </FlagSpan>
            <StrokeContainer>
              <StrokeImg
                src={stroke}
              />
            </StrokeContainer>
          </CountryInput>
          <NumberContainer>
            <span>{dial_code}</span>
            <Numberinput
              placeholder='(555) 555-5555'
              maxLength={10}
              value={digits}
              onChange={handlePhoneNumber}
            />
          </NumberContainer>
        </InputContainer>
        <ButtonContainer>
          <StyledButton
            onClick={handleChange}
          >{isLoading
            ? <FontAwesomeIcon icon={faSpinner} className="spinner" />
            : 'Next'
            }</StyledButton>
        </ButtonContainer>
      </Body>
    </Container>
  );
};

export default EditPhone;