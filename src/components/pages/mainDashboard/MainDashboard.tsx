import React,{useEffect} from 'react';

import styled from 'styled-components';

import { updateAlbum } from '../../../app/albumsSlice/albumsSlice';
import { useAppDispatch,useAppSelector } from '../../../app/hooks';
import { updatePhoto } from '../../../app/photosSlice/photosSlice';
import { update } from '../../../app/userSlice/userSlice'
import albumService from '../../../service/albumService';
import Footer from '../../common/footer/Footer';
import { Response } from '../../interfaces/interfaces';
import AlbumsDashboard from '../albumsDashboard/AlbumsDashboard';
import NoAlbumsDashboard from '../noAlbumsDashboard/NoAlbumsDashboard'


const Wrapper = styled.div`
  height:100vh
`
const MainDashboard = () => {
  const dispatch = useAppDispatch()
  const photos = useAppSelector(state => state.photosUpdate)
  const albumsStore = useAppSelector(state => state.albumsUpdate)
  useEffect(() => {
    const fetchData = async () => {
        const data:Response | false = await albumService.getAlbums()
        if (!data) {
          return
        }
      console.log(data)
      const { user, albums, allPhotos } = data.data
      const { avatar, name, phone, email } = user
      const paidInStore = albumsStore.filter(album => album.isPaid === true)
      const paidInResponse = albums.filter(album => album.isPaid === true)

      if (
        allPhotos.length !== photos.length
        ||
        paidInStore.length !== paidInResponse.length 
      ) {
        dispatch(update({ avatar, name, phone, email }))
        dispatch(updateAlbum({ albums }))
        dispatch(updatePhoto({ allPhotos }))
      }
        }
      fetchData()
  }, [])
  return (
    <Wrapper >
      {photos.length > 0 && <AlbumsDashboard />}
      {photos.length === 0 && <NoAlbumsDashboard />}
      <Footer/>
    </Wrapper>
  );
};

export default MainDashboard;