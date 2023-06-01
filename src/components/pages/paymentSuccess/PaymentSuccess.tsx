import React, {useState, useEffect} from 'react';
import { Wrapper, Container, Title, P1, P2, P3,ImageContainer,Img, StyledButton } from './components'
import successGif from './successGif.gif'
import { useNavigate } from 'react-router-dom';
import checkToken from '../../../utils/checkJWT';
import { LOGIN_ROUTE } from '../../../utils/consts';

const PaymentSuccess = () => {

  useEffect(() => {
    const isLoggedIn = checkToken()
    if (!isLoggedIn) {
      navigate(LOGIN_ROUTE)
    }
  }, [])

  const navigate = useNavigate()
  const [id, setId] = useState(() => {
    const savedItem = localStorage.getItem("albumID");
    return savedItem || "";
  });

  const [albumCover, setAlbumCover] = useState(() => {
    const savedItem = localStorage.getItem("albumCover");
    return savedItem || "";
  });

  const [albumName, setAlbumName] = useState(() => {
    const savedItem = localStorage.getItem("albumName");
    return savedItem || "";
  });

  const goToAlbum = () => {
    navigate(`/album/${id}`)
  }
  return (
    <Wrapper>
    <Container>
      <Title>Thank you!</Title>
        <P1>The album <b>{albumName ? albumName: 'Your album'}</b> is now unlocked.</P1>
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
    </Wrapper>
  );
};

export default PaymentSuccess;