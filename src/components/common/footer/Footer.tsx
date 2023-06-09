import React from 'react';
import { Link } from 'react-router-dom';

import { PRIVACY_POLICY_ROUTE, TERMS_ROUTE } from '../../../utils/consts';
import climateLogo from './climateLogo.svg'
import {
  Container,
  Copyright,
  Copyright1,
  FakeButton,
  FirstContainer,
  Frameology,
  Img,
  Link1,
  Link2,
  LinksContainer,
  Mission,
  Questions,
  SecondContainer,
  Title} from './components'
import frameoLogy from './frameologyLogo.png'

const Footer = () => {
  return (
    <Container id="footer">
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
          <Link to={TERMS_ROUTE}>
            <Link1>Terms of services</Link1>
          </Link>
          <Link to={PRIVACY_POLICY_ROUTE}>
            <Link2>Privacy Party</Link2>
          </Link>
        </LinksContainer>
      </SecondContainer>
    </Container>
  );
};

export default Footer;