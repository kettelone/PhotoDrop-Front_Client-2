import React from 'react';
import loader from './loaderGif.gif'
import { Container, Img, Text, Wrapper } from './components'


const Loader = () => {
  return (
    <Wrapper>
      <Container>
        <Img src={loader} alt="loader" />
        <Text>Almost there...</Text>
      </Container>
    </Wrapper>

  );
};

export default Loader;