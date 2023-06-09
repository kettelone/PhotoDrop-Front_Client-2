import React, { useState } from 'react';

import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { saveAs } from 'file-saver';

import closeIcon from '../../../assets/closeIcon.svg'
import paymentService from '../../../service/paymentService';
import arrowDown from './arrowDown.svg'
import {
  Arrow,
  ButtonContainer,
  CloseButton,
  Container,
  DownloadContainer,
  Img,
  Line,
  StyledButton,
  Text,
  Wrapper
} from './components'


const PhotoModal = (props:{
    url: string,
    photoId: string,
    isPaid: boolean,
    albumId: string | undefined,
}) => {
  
  const [isLoading, setIsLoading] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const handlePayment = async () => {
    setIsLoading(true)
    setIsDisabled(true)
    if (props.albumId) {
    const paymentLink = await paymentService.requestPayment(props.albumId)
    window.location.replace(paymentLink);
    }
    setTimeout(() => {
      setIsLoading(false)
      setIsDisabled(false)
    },2000)
  }
  
  const closeModal = () => {
    document.getElementById('singlePhoto')?.classList.remove('show')
    document.getElementById('root')?.classList.remove('noScroll')
    document.getElementById('footer')?.classList.remove('hide')
    document.body.classList.remove('noScroll')
  }

  // const saveImage = (url:string) => {
  //   saveAs(url, 'image.jpg') // Put your image url here.
  // }

  return (
    <Wrapper id='singlePhoto'>
      <CloseButton
      onClick={closeModal}
      >
        <img src={closeIcon} alt="closeIcon" />
      </CloseButton>
      <Container>
        <Img src={props.url} alt={props.photoId} />
      </Container>
      {
        props.isPaid
          ? <DownloadContainer
            href={props.url} download
          >
          <Arrow src={arrowDown} alt="arrowDown" />
          <Line />
          <Text>Download</Text>
        </DownloadContainer>
          :<ButtonContainer>
            <StyledButton
              onClick={handlePayment}
              disabled={isDisabled}
            >
              {
                isLoading 
                  ? <FontAwesomeIcon icon={faSpinner} className="spinner" />
                  :'Unlock photo'
              }
              </StyledButton>
          </ButtonContainer>
      }

    </Wrapper>
  );
};

export default PhotoModal;