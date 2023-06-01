import React, { useEffect, useState } from 'react';
import checkToken from '../../../utils/checkJWT';
import { Link } from 'react-router-dom';
import Loader from '../../modals/loader/Loader';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  PhotoIcon,
  Img,
  AlbumsContainer,
  Title,
  Albums,
  Album,
  AlbumCover,
  TitlePhotos,
  Photo,
  AlbumName,
  GridWrapper,
  GridContainer,
  Blur,
  Wrapper
} from './components'
import Footer from '../../common/footer/Footer';
import { LOGIN_ROUTE, PROFILE_ROUTE } from '../../../utils/consts';
import photoService from '../../../service/photoService';
import PhotoModal from '../../modals/photo/Photo';
import defaultImage from '../../../assets/defaultImage.svg';


const AlbumsDashboard = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const loggedIn = checkToken()
    if (!loggedIn) {
      navigate(LOGIN_ROUTE)
    }
  }, [])
  const [albums, setAlbums] = useState(() => {
    let temp = localStorage.getItem("albums")
    const albums:Array<any> = temp ? JSON.parse(temp) : []
    return albums;
  });
  const [photos, setPhotos] = useState(() => {
    let temp = localStorage.getItem("allPhotos")
    const photos: Array<any> = temp ? JSON.parse(temp) : []
    return photos;
  });
  const [selfie, setSelfie] = useState(() => {
    let selfie = localStorage.getItem("selfieUrl")
    return selfie;
  });
  const [isLoading, setIsLoading] = useState(false)
  const [url, setUrl] = useState('')
  const [photoId, setPhotoId] = useState('')
  const [photoLoading, setPhotoLoading] = useState(false)
  const [albumId, setAlbumId] = useState('')
  const [isPaid,setIsPaid] = useState(false)
  const [albumCover, setAlbumCover]= useState('')
  const [albumName, setAlbumName] = useState('')

  const goToProfile = () => {
    
    navigate(PROFILE_ROUTE)
  }

  const handlePhoto = async (id: string, albumID: string) => {
    document.body.classList.add('noScroll')
    setPhotoLoading(true)
    const album = albums?.filter(album => album.albumID === albumID)
    if (!album) {
      return
    }
    setPhotoId(id)
    setAlbumId(albumID)  
    setIsPaid(album[0].isPaid)
    setAlbumCover(album[0].url)
    setAlbumName(album[0].name)
    const data = await photoService.getOriginalPhoto(id)

    if (data) {
      setUrl(data?.data)
      setTimeout(() => {
        setPhotoLoading(false)
        document.getElementById('singlePhoto')?.classList.add('show')
      }, 100)
    }
  }

  return (
    <Wrapper>
      {
        isLoading || photoLoading
          ? <div><Loader /><Blur /></div>
          : ''
      }
      <Container>
        <PhotoModal
        url={url}
        photoId={photoId}
        isPaid={isPaid}
        albumId={albumId}
        photoCover={albumCover}
        albumName={albumName}
      />
      <div>
        <PhotoIcon
          onClick={goToProfile}
          >
        <Img src={selfie || defaultImage} alt="selfie" />
      </PhotoIcon>
          <AlbumsContainer>
        <Title>Albums</Title>
        <Albums className='albums-cover'>
            {albums?.map(album => 
              <Link to={`/album/${album.albumID}`} key={album.albumID}>
                <Album>
                  <AlbumCover src={album.url} alt="cover" />
                  <AlbumName>{album.name}</AlbumName>
                </Album>
              </Link>
          )}
        </Albums>
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
      <Footer/>
    </Wrapper>
  );
};

export default AlbumsDashboard;