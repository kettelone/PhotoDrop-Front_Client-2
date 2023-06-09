import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '../../../app/hooks';
import defaultImage from '../../../assets/defaultImage.svg';
import { PROFILE_ROUTE } from '../../../utils/consts';
import PhotoModal from '../../modals/photo/Photo';
import graphics from './combo.png';
import {
  BrowseTitle,
  Container,
  Graphics,
  GraphicsContainer,
  Img,
  PhotoIcon,
  PreviewContainer,
  PreviewImg,
  Separator,
  SubTitle,
  Title,
  Wrapper,  
} from './components'
import test1 from './test1.jpg';
import test2 from './test2.jpg';
import test3 from './test3.jpg';


const Dashboard = () => {
  const navigate = useNavigate()
  const selfie = useAppSelector(state => state.userUpdate.selfieUrl)
  const [url, setUrl] = useState(test1)

  const handlePhoto = (url: string) => {
    document.body.classList.add('noScroll')
    document.getElementById('root')?.classList.add('noScroll')
    document.getElementById('singlePhoto')?.classList.add('show')
    setUrl(url)
  }

  return (
    <div>
      <PhotoModal
        url={url}
        photoId={"#"}
        isPaid={true}
        albumId={"test"}
      />
      <Container>
        <PhotoIcon
          onClick={() => navigate(PROFILE_ROUTE)}
        >
          <Img src={selfie || defaultImage} alt="selfie" />
            </PhotoIcon>
            <Wrapper>
              <GraphicsContainer>
                <Graphics src={graphics} alt="graphics
              " />
              </GraphicsContainer>
              <Title>
                Your photos will drop soon.
              </Title>
              <SubTitle>
                You will get a text message when they are ready. It can take up to 48 hours.
              </SubTitle>
          <Separator />
              <BrowseTitle>Browse Art Prints</BrowseTitle>
              <PreviewContainer>
            <PreviewImg
              src={test1}
              alt="test"
              onClick={()=>handlePhoto(test1)}
            />
            <PreviewImg
              src={test2}
              alt="test"
              onClick={() => handlePhoto(test2)}
            />
            <PreviewImg
              src={test3}
              alt="test"
              onClick={() => handlePhoto(test3)}
            />
              </PreviewContainer>
        </Wrapper>
      </Container>
  </div> 
  );
};

export default Dashboard;