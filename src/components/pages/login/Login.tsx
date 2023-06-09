import React, { ChangeEvent ,useState} from 'react';
import { useNavigate } from 'react-router-dom';

import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { updateFullNumber } from '../../../app/countrySlice/countrySlice'
import { useAppDispatch,useAppSelector } from '../../../app/hooks'
import stroke from '../../../assets/stroke.svg'
import loginService from '../../../service/loginService';
import { CODE_CONFIRMATION_ROUTE } from '../../../utils/consts'
import CountrySelect from '../../modals/countrySelect/CountrySelect';
import {
  Body,
  BodyWrapper,
  ButtonContainer,
  ConsentConatainer,
  ConsentP1,
  ConsentP2,
  Container,
  CountryInput,
  FlagImg,
  FlagSpan,
  InputContainer,
  InputLabel,
  NumberContainer,
  Numberinput,
  StrokeContainer,
  StrokeImg,
  StyledButton,
  Title} from './components'


const Login = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { country, dialCode } = useAppSelector(state => state.countryUpdate)
  const [digits, setDigits] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [isDisabledCountryInput, setIsDisabledCountryInput] = useState(false)

  const handlePhoneNumber = (event: ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9\b]+$/;
    if (event.target.value === '' || regex.test(event.target.value)) {
        setDigits(event.target.value)
    }
  }

  const hanleCountry = () => {
    if (!isDisabledCountryInput) {
      document.getElementById('countryModal')?.classList.add('show')
    }
  }

  const handleCreate = async () => {
    if (dialCode && digits.length <= 10 && digits.length >= 9) {
      setDisabled(true)
      setIsLoading(true)
      setIsDisabledCountryInput(true)
      const fullNumber = `${dialCode.substring(1)}${digits}`
      dispatch(updateFullNumber({ fullNumber }))
      await loginService.requestOtp(fullNumber)
      setIsLoading(false)
      navigate(CODE_CONFIRMATION_ROUTE)
    }
  }

  return (
    <Container>
      <CountrySelect />
    <BodyWrapper>
    <Body>
      <Title>Let`s get started</Title>
      <InputLabel>Enter your phone number</InputLabel>
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
              <span>{dialCode}</span>
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
            disabled={disabled}
            onClick={handleCreate}
          >{isLoading
              ? <FontAwesomeIcon icon={faSpinner} className="spinner" />
              : 'Create Account'
            }</StyledButton>
        </ButtonContainer>
      <ConsentConatainer>
        <ConsentP1>
          By proceeding, you consent to get WhatsApp or SMS messages, from PhotoDrop and its affiliates to the number provided. Text “STOP” to 89203 to opt out.
        </ConsentP1>
        <ConsentP2>
          By continuing, you indicate that you have read and agree to our <u><a href="/">Terms of Use</a></u> & <u><a href="/">Privacy Policy</a></u>
        </ConsentP2>
      </ConsentConatainer>
        </Body>
        </BodyWrapper>
    </Container>
  );
};

export default Login;