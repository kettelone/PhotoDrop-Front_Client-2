import React from 'react';

import { Container, Img, Text, Wrapper } from './components'
import loader from './loaderGif.gif'


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