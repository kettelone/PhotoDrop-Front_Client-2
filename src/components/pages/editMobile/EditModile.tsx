import React, { ChangeEvent,useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useAppDispatch,useAppSelector } from '../../../app/hooks'
import { update } from '../../../app/userSlice/userSlice';
import stroke from '../../../assets/stroke.svg'
import accountService from '../../../service/accountService';
import albumService from '../../../service/albumService';
import { CONFIRM_EDIT_PHONE_ROUTE } from '../../../utils/consts'
import GoBack from '../../common/goBack/GoBack';
import CountrySelect from '../../modals/countrySelect/CountrySelect';
import {
  Body,
  ButtonContainer,
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


const EditPhone = () => {
  const navigate = useNavigate()
  const { country, dialCode } = useAppSelector(state => state.countryUpdate)
  const [digits, setDigits] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const [disabled, setDisabled] = useState(false)
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
    if (
      !disabled
      && dialCode
      && digits.length <= 10
      && digits.length >= 9) {
      setDisabled(true)
      setIsLoading(true)
      const fullNumber = `${dialCode.substring(1)}${digits}`
      dispatch(update({ newPhone: fullNumber }))
      await accountService.editPhone(fullNumber)
        setIsLoading(false)
        navigate(CONFIRM_EDIT_PHONE_ROUTE)
        setDisabled(false)
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
            onClick={handleChange}
            style={{ opacity: digits.length >= 9 ? 1 : 0.5 }}
            disabled={digits.length >= 9 ? false : true}
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