import React, { useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';
import Button from '../../common/button/Button';
import { useNavigate } from 'react-router-dom';
import './index.css'
import accountService from '../../../service/accountService';
import { Container, Title, SubTitle, Phone, ResendButton, ButtonContainer, Wrapper, ErrorMessage } from './components'
import { ACCOUNT_SETTINGS, LOGIN_ROUTE } from '../../../utils/consts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import checkToken from '../../../utils/checkJWT';
import GoBack from '../../common/goBack/GoBack';


const NewCodeConfirmation = () => {

  useEffect(() => {
    const isLoggedIn = checkToken()
    if (!isLoggedIn) {
      navigate(LOGIN_ROUTE)
    }
  }, [])

  const [otp, setOtp] = useState('');
  const [resendPressed, setResendPressed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [phoneNumber, setPhone] = useState(() => {
    const savedItem = localStorage.getItem("phoneNumber");
    return savedItem || "";
  });
  const navigate = useNavigate()

  const handleNext = async () => {

    setIsLoading(true)
    const response = await accountService.phoneVerify(phoneNumber, otp)
    console.log({ response })

    if (response) {
      console.log(response)

      navigate(ACCOUNT_SETTINGS)
      setIsLoading(false)
    } else {
      setIsError(true)
      setIsLoading(false)
      setTimeout(() => {
        setIsError(false)
      }, 4000)
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
            disabled={otp.length === 6 ? false : true}
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