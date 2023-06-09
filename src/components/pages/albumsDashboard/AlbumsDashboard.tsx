import React, {useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAppDispatch,useAppSelector } from '../../../app/hooks';
import {updateOriginalPhotos} from '../../../app/originalPhotosSlice/originalPhotosSlice'
import { update } from '../../../app/paidAlbumSlice/PaidAlbumSlice'
import defaultImage from '../../../assets/defaultImage.svg';
import photoService from '../../../service/photoService';
import { PROFILE_ROUTE } from '../../../utils/consts';
import Loader from '../../modals/loader/Loader';
import PhotoModal from '../../modals/photo/Photo';
import {
  Album,
  AlbumCover,
  AlbumName,
  Albums,
  AlbumsContainer,
  AlbumsWrapper,
  Blur,
  Container,
  Gradient,
  GridContainer,
  GridWrapper,
  Img,
  Photo,
  PhotoIcon,
  Title,
  TitlePhotos,
  Wrapper
} from './components'


const AlbumsDashboard = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const albums = useAppSelector(state => state.albumsUpdate)
  const photos = useAppSelector(state => state.photosUpdate)
  const selfie = useAppSelector(state => state.userUpdate.avatar)
  const originalPhotos = useAppSelector(state => state.originalPhotosUpdate)
  const [isPhotoLoading, setIsPhotoLoading] = useState(false)
  const [originalPhotoUrl, setOriginalPhotoUrl] = useState('')
  const [photoId, setPhotoId] = useState('')
  const [albumId, setAlbumId] = useState('')
  const [isPaid, setIsPaid] = useState(false)

  // handle open album
  const handleAlbum = (albumID:string) => {
    const album = albums?.filter(album => album.albumID === albumID)
    if (!album) {
      return
    }
    if (!album[0].isPaid) {
      dispatch(update({  albumID }))
    }
  }

  // handle open photo
  const handlePhoto = async (id: string, albumID: string) => {
    document.body.classList.add('noScroll')
    document.getElementById('root')?.classList.add('noScroll')
    setOriginalPhotoUrl('')
    const album = albums?.filter(album => album.albumID === albumID)
    if (!album) {
      return
    }
    if (!album[0].isPaid) {
      dispatch(update({ albumID }))
    }
    setAlbumId(albumID)
    setPhotoId(id)
    setIsPaid(album[0].isPaid)

    if (originalPhotos[id]) {
      setOriginalPhotoUrl(originalPhotos[id])
    } else {
      setIsPhotoLoading(true)
      const data = await photoService.getOriginalPhoto(id)
      if (!data) {
        return
      }

      dispatch(updateOriginalPhotos({ [id]: data?.data }))
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
        <PhotoModal
        url={originalPhotoUrl}
        photoId={photoId}
        isPaid={isPaid}
        albumId={albumId}
      />
      <div>
        <PhotoIcon
            onClick={() => navigate(PROFILE_ROUTE)}
          >
        <Img src={selfie || defaultImage} alt="selfie" />
      </PhotoIcon>
          <AlbumsContainer>
          <Title>Albums</Title>
          <AlbumsWrapper>
          <Albums className='albums-cover'>
            {albums?.map(album => 
              <Link
                onClick={()=>handleAlbum(album.albumID)}
                to={`/album/${album.albumID}`} key={album.albumID}
              >
                
                <Album>
                  <Gradient>
                    <AlbumCover src={album.url} alt="cover" />
                  </Gradient>
                  <AlbumName>{album.name}</AlbumName>
                </Album>
              </Link>
          )}
          </Albums>
        </AlbumsWrapper>
      </AlbumsContainer>
      <TitlePhotos>All photos</TitlePhotos> 
          <GridWrapper>
          <GridContainer id="grid">
            {
              photos && photos.length > 0
                ? photos.map(photo =>
                    <Photo
                      src={photo.url}
                      alt="photo"
                      className='photos'
                      data-name={photo.photoID}
                      key={photo.url}
                      onClick={() => handlePhoto(photo.photoID, photo.albumID)}
                    />
                )
                : ''
            }
          </GridContainer>
          </GridWrapper>
      </div>
      </Container>
    </Wrapper>
  );
};

export default AlbumsDashboard;