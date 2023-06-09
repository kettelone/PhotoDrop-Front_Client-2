import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { updateOriginalPhotos } from '../../../app/originalPhotosSlice/originalPhotosSlice'
import { update } from '../../../app/paidAlbumSlice/PaidAlbumSlice';
import arrowLeft from '../../../assets/arrowLeft.svg'
import paymentService from '../../../service/paymentService';
import photoService from '../../../service/photoService';
import {MAIN_DASHBOARD_ROUTE } from '../../../utils/consts';
import Footer from '../../common/footer/Footer';
import Loader from '../../modals/loader/Loader';
import PhotoModal from '../../modals/photo/Photo';
import {
  Amount,
  Blur,
  ButtonContainer,
  Container,
  Date,
  DateAmount,
  GoBack,
  GridContainer,
  GridWrapper,
  Name,
  Photo,
  StyledButton,
  TextContainer,
  TextWrapper,
  TopContainer,
  Wrapper} from './components'

const Album = () => {
  const dispatch = useAppDispatch()
  const { id } = useParams();
  const originalPhotos = useAppSelector(state => state.originalPhotosUpdate)
  const photos = useAppSelector(state => state.photosUpdate.filter(photo => photo.albumID === id))
  const albums = useAppSelector(state => state.albumsUpdate)
  const quantity = photos.length
  const album = albums.filter(album => album.albumID === id)
  const isPaid= album[0].isPaid
  const [originalPhotoUrl, setOriginalPhotoUrl] = useState('')
  const [photoId, setPhotoId] = useState('')
  const [isDisabled, setIsDisabled] = useState(false)
  const [isPhotoLoading, setIsPhotoLoading] = useState(false)
  const [isPaymentLoading, setIsPaymentLoading] = useState(false)

  const handlePayment = async () => {
    setIsPaymentLoading(true)
    setIsDisabled(true)
    if (id) {
    const paymentLink = await paymentService.requestPayment(id)
      window.location.replace(paymentLink);
    }
    setTimeout(() => {
      setIsPaymentLoading(false)
      setIsDisabled(false)
    },1000)
  }

  const handlePhoto = async (photoId: string) => {

    document.body.classList.add('noScroll')
    document.getElementById('footer')?.classList.add('hide')
    setOriginalPhotoUrl('')
    if (!album[0].isPaid) { 
      dispatch(update({ albumID: id }))
    }

    if (originalPhotos[photoId]) {
      setOriginalPhotoUrl(originalPhotos[photoId])
    } else {
      setIsPhotoLoading(true)
      const data = await photoService.getOriginalPhoto(photoId)
      if (!data) {
        return
      }
      dispatch(updateOriginalPhotos({ [photoId]: data?.data }))
      setOriginalPhotoUrl(data?.data)
      setIsPhotoLoading(false)
    }
    document.getElementById('singlePhoto')?.classList.add('show')
  }

  return (
    <Wrapper>
      {
        isPhotoLoading
          ? <div><Loader /><Blur /></div>
          : ''
      }
      <Container>
      <TopContainer id="top">
        <GoBack>
          <Link to={MAIN_DASHBOARD_ROUTE}>
          <div>
            <img src={arrowLeft} alt="arrow-let " />
          </div>
          </Link>
        </GoBack>
        <TextWrapper>
          <TextContainer>
            <Name>{album[0].name}</Name>
          <DateAmount>
              <Date>Jan 10, 2022 •</Date>
              <Amount>{quantity} { quantity === 1 ? 'photo' :'photos'}</Amount>
          </DateAmount>
          </TextContainer>
        </TextWrapper>
      </TopContainer>
        <GridWrapper>
          <PhotoModal
            url={originalPhotoUrl}
            photoId={photoId}
            isPaid={isPaid}
            albumId={id}
          />
        <GridContainer id="grid">
          {
            photos && photos.length > 0
              ? photos.map(photo => 
                   <Photo
                    onClick={() => handlePhoto(photo.photoID)}
                    src={photo.url}
                    alt="photo"
                    className='photos'
                    data-name={photo.photoID}
                    key={photo.url}
                  />
              )
              : ''
          }
        </GridContainer>
      </GridWrapper>
      {
        isPaid
          ?''
          : <ButtonContainer>
            <StyledButton
              onClick={handlePayment}
              disabled={isDisabled}
            >
            {
                isPaymentLoading
                  ? <FontAwesomeIcon icon={faSpinner} className="spinner" />
                  : "Unlock your photos"
            }
              </StyledButton>
          </ButtonContainer>
        }
          <Footer />
      </Container>
    </Wrapper>
  );
};

export default Album;