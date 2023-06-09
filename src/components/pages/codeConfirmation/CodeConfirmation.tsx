import React, {useState} from 'react';
import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';

import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { updateAlbum } from '../../../app/albumsSlice/albumsSlice';
import { setIsAuth, setIsFetching } from '../../../app/authSlice/authSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { updatePhoto } from '../../../app/photosSlice/photosSlice';
import {update} from '../../../app/userSlice/userSlice'
import albumService from '../../../service/albumService';
import loginService from '../../../service/loginService';
import {
  MAIN_DASHBOARD_ROUTE,
  UPLOAD_SELFIE_ROUTE} from '../../../utils/consts';
import Loader from '../../modals/loader/Loader';
import { Blur } from '../addSelfie/components';
import {
  ButtonContainer,
  Container,
  ErrorMessage,
  Phone,
  ResendButton,
  StyledButton,
  SubTitle,
  Title,
  Wrapper} from './components'

import './index.css'

const CodeConfirmation = () => {
  const dispatch = useAppDispatch()
  const [otp, setOtp] = useState('');
  const [resendPressed, setResendPressed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showLoader, setShowLoader] = useState(false)
  const [isError, setIsError] = useState(false)
  const navigate = useNavigate()
  const  phoneNumber = useAppSelector(state => state.countryUpdate.fullNumber)
  const handleNext = async () => {
    if (!phoneNumber) {
      return 
    }
    
    setIsLoading(true)
    const response = await loginService.login(phoneNumber, otp)
    if (response) {
      const fetchData = async () => {
            const data = await albumService.getAlbums()
            if (data) {
              const { user, albums, allPhotos } = data.data
              const { avatar, name, phone, email } = user
                setIsLoading(true)
                dispatch(update({ avatar, name, phone, email }))
                dispatch(updateAlbum({ albums }))
                dispatch(updatePhoto({ allPhotos }))
                dispatch(setIsAuth())
              if (!avatar) {
                navigate(UPLOAD_SELFIE_ROUTE)
                setIsLoading(false)
                setShowLoader(false)
              } else {
                setShowLoader(true)
                setTimeout(() => {
                  navigate(MAIN_DASHBOARD_ROUTE)
                  setIsLoading(false)
                  setShowLoader(false)
                },1000)
              }
              dispatch(setIsFetching())
            }
        document.body.classList.remove('no-scroll')
        }
      fetchData()
    } else {
      setIsError(true)
      setIsLoading(false)
      setTimeout(() => {
        setIsError(false)
      }, 4000)
      console.log(isError)
    }
  }

  const handleReset = async () => {
    if (!resendPressed && phoneNumber) {
      setOtp('')
      await loginService.regenerate(phoneNumber)
    }
    setResendPressed(true)
  }

  return (
    <Wrapper>
      {
        showLoader
          ? <div><Blur /><Loader /></div>
          : ''
      }
    <Container>
      <Title>What`s the code?</Title>
      <SubTitle>Enter the code sent to <Phone>+{phoneNumber}</Phone></SubTitle>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderInput={(props) => <input {...props} />}
        inputType={"tel"}
        inputStyle='inputStyle'
        containerStyle="containerStyle"
      />
      <div>
        <ResendButton
          onClick={handleReset}
          disabled={resendPressed}
          style={{ opacity: resendPressed  ? 0.5 : 1 }}

        >Resend code</ResendButton>
      </div>
      <ButtonContainer>
      <StyledButton 
            style={{
            opacity: otp.length === 6 ? 1 : 0.5, cursor: "pointer"}}
            disabled={otp.length === 6 ? false : true}
        onClick={handleNext}
          >{
              isLoading
                ? <FontAwesomeIcon icon={faSpinner} className="spinner" />
                :"Next"
            }
          </StyledButton>
        </ButtonContainer>
        {isError
          ? <ErrorMessage id="error-message">The code in not matching</ErrorMessage>
          :''
        }
      </Container>
    </Wrapper>
  );
};

export default CodeConfirmation;