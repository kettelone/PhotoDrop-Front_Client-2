import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector} from '../../../app/hooks';
import pen from './pen.svg'
import { ACCOUNT_SETTINGS, ALBUMS_DASHBOARD_ROUTE, DASHBOARD_ROUTE, EDIT_NAME_ROUTE, PROFILE_ROUTE } from '../../../utils/consts';
import CropSelfie from '../../modals/cropSelfie/CropSelfie';
import checkToken from '../../../utils/checkJWT';
import { LOGIN_ROUTE } from '../../../utils/consts';
import arrowRight from '../../../assets/arrowRight.svg'
import GoBack from '../../common/goBack/GoBack';
import defaultImage from '../../../assets/defaultImage.svg';

import {
  Wrapper,
  Container,
  Welcome,
  YourSelfie,
  SelfieContainer,
  Img,
  Pen,
  Blur,
  IconContainer,
  Input,
  Options,
  Option,
  Title,
  Description,
  ArrowWrapper,
  ArrowContainer,
  LoaderWrapper
 } from './components'

const Profile = () => {
  const changedSelfie = useAppSelector(state => state.selfieUpdate.selfieChanged)
  //once selfie updated sahnge state for the page to reload after timeOut
  useEffect(() => {
    const loggedIn = checkToken()
    if (!loggedIn) {
      navigate(LOGIN_ROUTE);
    }
    setSelfie(localStorage.getItem('selfieUrl'))
  }, [changedSelfie])

  const [userName, setUserName] = useState(() => {
    const name = localStorage.getItem("name");
    return name ;
  });
  const [selfie, setSelfie] = useState(() => {
    const selfie = localStorage.getItem("selfieUrl");
    return selfie;
  });
  const [albumsExist, setAlbumExist] = useState(() => {
    const value = localStorage.getItem('albumsExist')
    return value || ''
  })
  const [selectedFile, setSelectedFile] = useState<null | File>(null)
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()
  
  const selectPhoto = (event: any) => {
    if (event.target.files) {
      document.getElementById('initialSelfie')?.classList.add('show')
      document.getElementById('background')?.classList.add('show')
      setSelectedFile(event.target.files[0])
    }
  }

  const goBack = () => {
    if (albumsExist) {
      navigate(ALBUMS_DASHBOARD_ROUTE)
    } else {
      navigate(DASHBOARD_ROUTE)
    }

  }
  return (
    <Wrapper>
      <span onClick={goBack}>
        <GoBack />
      </span>
      <Container>
      <CropSelfie selfie={selectedFile} page={PROFILE_ROUTE} />
      <Welcome>Welcome, {userName}.</Welcome>
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