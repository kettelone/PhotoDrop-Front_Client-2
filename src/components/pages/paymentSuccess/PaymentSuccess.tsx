import React, {useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';

import { updateAlbum } from '../../../app/albumsSlice/albumsSlice';
import { useAppDispatch,useAppSelector} from '../../../app/hooks';
import { updateOriginalPhotos} from '../../../app/originalPhotosSlice/originalPhotosSlice'
import { updatePhoto } from '../../../app/photosSlice/photosSlice';
import albumService from '../../../service/albumService';
import { Response } from '../../interfaces/interfaces';
import Loader from '../../modals/loader/Loader';
import { Container, ImageContainer,Img, P1, P2, P3,StyledButton,Title, Wrapper } from './components'
import successGif from './successGif.gif'

const PaymentSuccess = () => {
  interface IntialState {
    [key: string]: string | undefined
  }

  const dispatch = useAppDispatch()
  const id = useAppSelector(state => state.paidAlbumsUpdate.albumID)
  const [albumName, setAlbumName] = useState('')
  const [albumCover, setAlbumCover] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const data: Response | false = await albumService.getAlbums()
      if (!data) {
        return
      }
      const { albums, allPhotos } = data.data
      const justPaidPhotoIds: IntialState = {}
      allPhotos.filter(photo => { 
        if (photo.albumID === id) {
          justPaidPhotoIds[photo.photoID] = undefined
        }
      })
      dispatch(updateOriginalPhotos( justPaidPhotoIds ))
      
      const album = albums.filter(album => album.albumID === id)
      setAlbumName(album[0].name)
      setAlbumCover(album[0].url)
      dispatch(updateAlbum({ albums }))
      dispatch(updatePhoto({ allPhotos }))
      setIsLoading(false)
    }
    fetchData()
  },[])
  const navigate = useNavigate()
  
  const goToAlbum = () => {
    navigate(`/album/${id}`)
  }
  return (
    <Wrapper>
      {
        !isLoading
          ? <Container>
            <Title>Thank you!</Title>
            <P1>The album <b>{albumName ? albumName : 'Your album'}</b> is now unlocked.</P1>
            <P2>You can now download, share, post, and print your hi-res, watermark-free, glorious memories.</P2>
            <ImageContainer>
              <Img src={albumCover ? albumCover : successGif} alt="congrats_unlocked" />

            </ImageContainer>
            <StyledButton
              onClick={goToAlbum}
            >See Photos
            </StyledButton>
            <P3>You will receive an email with your order details.</P3>
          </Container>
          : <Loader />
    }
    </Wrapper>
  );
};

export default PaymentSuccess;