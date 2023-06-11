import React, { useState } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';

import { useAppSelector} from '../../../app/hooks';
import arrowRight from '../../../assets/arrowRight.svg'
import defaultImage from '../../../assets/defaultImage.svg';
import {
  ACCOUNT_SETTINGS,
  EDIT_NAME_ROUTE,
  MAIN_DASHBOARD_ROUTE,
  PROFILE_ROUTE} from '../../../utils/consts';
import GoBack from '../../common/goBack/GoBack';
import CropSelfie from '../../modals/cropSelfie/CropSelfie';
import {
  ArrowContainer,
  ArrowWrapper,
  Container,
  Description,
  IconContainer,
  Img,
  Input,
  Option,
  Options,
  Pen,
  SelfieContainer,
  Title,
  Welcome,
  Wrapper,
  YourSelfie,
 } from './components'
import pen from './pen.svg'

const Profile = () => {
  const userName = useAppSelector(state => state.userUpdate.name)
  const selfie = useAppSelector(state => state.userUpdate.avatar)
  const [selectedFile, setSelectedFile] = useState<null | File>(null)
  const navigate = useNavigate()
  const {state} = useLocation();
  
  const selectPhoto = (event: any) => {
    if (event.target.files) {
      document.getElementById('initialSelfie')?.classList.add('show')
      document.getElementById('background')?.classList.add('show')
      setSelectedFile(event.target.files[0])
    }
  }

  const goBack = () => {
    if (state) {
      navigate(state)
    } else {
      navigate(MAIN_DASHBOARD_ROUTE)

    }
  }

  // useEffect(() => {
  //   return 
  // }, [selfie])
  return (
    <Wrapper>
      <span onClick={goBack}>
        <GoBack />
      </span>
      <Container>
      <CropSelfie selfie={selectedFile} page={PROFILE_ROUTE} />
      <Welcome>Welcome, {userName || "Guest"}.</Welcome>
      <YourSelfie>Your selfie</YourSelfie>
      <SelfieContainer>
        <Img src={selfie || defaultImage} alt="selfie" />
        <IconContainer htmlFor='imageOnly'>
          <Pen src={pen} alt="pen" />
          <Input
            type="file"
            id="imageOnly"
            onChange={selectPhoto}
            accept="image/*"
          />
        </IconContainer>
        </SelfieContainer>
        <Options>
          <Option
            onClick={() => navigate(EDIT_NAME_ROUTE)}
          >
            <div>
              <Title>
                Your name
              </Title>
              <Description>
                Tell us your name to personalize communications.
              </Description>
            </div>
            <ArrowWrapper
            >
              <ArrowContainer>
                <img src={arrowRight} alt="arrow-right" />
              </ArrowContainer>
              </ArrowWrapper>
          </Option>
          <Option
            onClick={() => navigate(ACCOUNT_SETTINGS)}
          >
            <div>
            <Title>
              Account settings
            </Title>
            <Description>
              Update your phone and email
              </Description>
            </div>
            <ArrowWrapper
            >
              <ArrowContainer>
                <img src={arrowRight} alt="arrow-right" />
              </ArrowContainer>
            </ArrowWrapper>
          </Option>
          <Option>
          <div>
            <Title>
              Notification settings
            </Title>
            <Description>
              How should we contact you?
          </Description>
            </div>
            <ArrowWrapper>
              <ArrowContainer>
                <img src={arrowRight} alt="arrow-right" />
              </ArrowContainer>
            </ArrowWrapper>
          </Option>
        </Options>
      </Container>
    </Wrapper>
  );
};

export default Profile;