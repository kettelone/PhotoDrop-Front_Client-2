import React, {useState } from 'react';
import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';

import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useAppDispatch,useAppSelector } from '../../../app/hooks';
import { update } from '../../../app/userSlice/userSlice'
import accountService from '../../../service/accountService';
import albumService from '../../../service/albumService';
import { ACCOUNT_SETTINGS } from '../../../utils/consts';
import Button from '../../common/button/Button';
import GoBack from '../../common/goBack/GoBack';
import { ButtonContainer, Container, ErrorMessage,Phone, ResendButton, SubTitle, Title, Wrapper } from './components'

import './index.css'

const NewCodeConfirmation = () => {
  const dispatch = useAppDispatch()
  const [otp, setOtp] = useState('');
  const [resendPressed, setResendPressed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const phoneNumber = useAppSelector(state => state.userUpdate.newPhone)
  const navigate = useNavigate()

  const handleNext = async () => {
    if (!disabled) {
      setIsLoading(true)
      setDisabled(true)
      const response = await accountService.phoneVerify(phoneNumber, otp)
      if (response) {
        const data = await albumService.getAlbums()
        if (!data) {
          return
        }
        const { selfieUrl,phone } = data.data.user
        dispatch(update({ selfieUrl, phone }))
          navigate(ACCOUNT_SETTINGS)
          setIsLoading(false)
          setDisabled(false)
        } else {
          setIsError(true)
          setIsLoading(false)
          setDisabled(false)
          setTimeout(() => {
            setIsError(false)
          }, 4000)
        }

    }
  }

  const handleReset = async () => {
    if (!resendPressed && phoneNumber) {
      setOtp('')
      await accountService.editPhone(phoneNumber)
    }
    setResendPressed(true)
  }

  return (
    <Wrapper>
      <span onClick={() => navigate(-1)}>
        <GoBack />
      </span>
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
            style={{ opacity: resendPressed ? 0.5 : 1 }}

          >Resend code</ResendButton>
        </div>
        <ButtonContainer>
          <Button
            style={{ opacity: otp.length === 6 ? 1 : 0.5 , cursor:"pointer"}}
            disabled={otp.length !== 6} 
            onClick={handleNext}
          >{
              isLoading
                ? <FontAwesomeIcon icon={faSpinner} className="spinner" />
                : "Next"
            }
          </Button>
        </ButtonContainer>
        {isError
          ? <ErrorMessage id="error-message">The code in not matching</ErrorMessage>
          : ''
        }
      </Container>
    </Wrapper>
  );
};

export default NewCodeConfirmation;