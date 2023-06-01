import React, {useState} from 'react';
import paymentService from '../../../service/paymentService';
import { saveAs } from 'file-saver';
import {
  Img, Wrapper, Container, CloseButton, DownloadContainer,
  Arrow,
  Line,
  Text,
  ButtonContainer,
  StyledButton
} from './components'
import closeIcon from '../../../assets/closeIcon.svg'
import arrowDown from './arrowDown.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'


const PhotoModal = (props:
  {
    url: string,
    photoId: string,
    isPaid: boolean,
    albumId: string | undefined,
    photoCover: string,
    albumName: string
  }) => {
  
  const [isLoading, setIsLoading] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
    if (props.albumId) {
    localStorage.setItem('albumID', props.albumId)
    localStorage.setItem('albumCover', props.photoCover)
    localStorage.setItem('albumName', props.albumName)
    }


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
    document.body.classList.remove('noScroll')
  }

  const saveImage = (url:string) => {
    saveAs(url, 'image.jpg') // Put your image url here.
  }

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
            // onClick={()=>saveImage(props.url)}
            href={props.url} download
          >
            {/* <a href={props.url} download>Download</a> */}
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