import React from 'react';
import frameoLogy from './frameologyLogo.png'
import climateLogo from './climateLogo.svg'
import { Link } from 'react-router-dom';
import {
  Container,
  FirstContainer,
  Title,
  Frameology,
  Mission,
  Questions,
  Img,
  FakeButton,
  Copyright,
  Copyright1,
  LinksContainer,
  Link1,
  Link2,
  SecondContainer
} from './components'
import { PRIVACY_POLICY_ROUTE, TERMS_ROUTE } from '../../../utils/consts';

const Footer = () => {
  return (
    <Container>
      <FirstContainer>
        <Title>PhotoDrop is brought to you by</Title>
        <Frameology>
          <Img src={frameoLogy} alt="frameoLogy"/>
      </Frameology>
        <Mission>
          Our mission is to help people connect with their memories. If you framing some of the photos from your experience, please consider using Frameology. It supports the photographers and makes PhotoDrop possible.
      </Mission>
        <FakeButton>Order photos</FakeButton>
        <Copyright1>© 2022 FOM Online Inc</Copyright1>
      </FirstContainer>
      <SecondContainer>
        <Questions>Questions? Get in touch - hello@photodrop.me</Questions>
        <Img src={climateLogo} alt="climateLogo" style={{ marginBottom: '30px' }} />
        <Copyright>© 2022 FOM Online Inc</Copyright>
        <LinksContainer>
          <Link to={TERMS_ROUTE} target="_blank">
            <Link1>Terms of services</Link1>
          </Link>
          <Link to={PRIVACY_POLICY_ROUTE} target="_blank">
            <Link2>Privacy Party</Link2>
          </Link>
        </LinksContainer>
      </SecondContainer>
    </Container>
  );
};

export default Footer;