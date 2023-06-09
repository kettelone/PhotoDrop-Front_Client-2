import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '../../../app/hooks';
import defaultImage from '../../../assets/defaultImage.svg';
import { PROFILE_ROUTE } from '../../../utils/consts';
import {
  Container, Img, P, PhotoIcon,
SubContainer, SubTitle, Title} from './components'
const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[])
  const selfie = useAppSelector(state => state.userUpdate.selfieUrl)
  const navigate = useNavigate()
  return (
    <Container>
      <PhotoIcon
        onClick={() => navigate(PROFILE_ROUTE, { state: '/terms-and-conditions' })}
      >
        <Img src={selfie || defaultImage} alt="selfie" />
      </PhotoIcon>
      <SubContainer>
        <Title>Terms of service</Title>
        <P>By registering to use and access the FOM Online, Inc. (“PhotoDrop”) websites located at photodrop.me and frameology.com, the PhotoDrop photo matching service, and texting bot (together, the “Service”), you are agreeing to be bound by these Terms of Use (the “Terms”). The Terms and our Privacy Policy (photodrop.me/terms) govern your use of our Service. By agreeing to these Terms, you represent that you are not a resident of the state of Illinois and will not upload photos to PhotoDrop taken in the state of Illinois.<strong> Please read these Terms carefully. Unless you opt out of arbitration in accordance with the instructions below within 30 days of first agreeing to these Terms, you are agreeing that we will resolve certain disputes between us in binding arbitration on an individual basis rather than in jury trials or class actions.</strong></P>
        <P>If you do not agree with any of these terms, you are prohibited from using or accessing the Service. If you are accessing and using the Service on behalf of a company (such as your employer) or other legal entity, you represent and warrant that you have the authority to bind that company or other legal entity to these Terms. In that case, “you” and “your” will refer to that company or other legal entity.</P>
        <SubTitle>Privacy Policy</SubTitle>
        <P>
          Please refer to our Privacy Policy at https://photodrop.me/ privacy for information on how we collect, use and disclose information from our users. You acknowledge and agree that your use of the Service is subject to our Privacy Policy.
        </P>
        <SubTitle>Facial Recognition Technology</SubTitle>
        <P>You agree that we may use facial recognition technology to allow us to identify photos on the Service in which you appear when you add a reference photo to the Service. For example, our facial recognition technology will compare your reference image with albums of photos to locate photos of you. In addition, your responses to potential photo matches may improve the accuracy of the facial recognition technology. By using the Service and adding a reference image, you consent to the use of facial recognition technology to identify photos on the Service in which you appear. You represent that the reference image photo added by you to the Service is you (or a family member for whom you are the legal guardian or have their consent) and that you are not impersonating or misrepresenting yourself as any other person or entity. For more information on our use of facial recognition technology, please see our Privacy Policy.</P>
        <SubTitle>Changes to Terms of Service</SubTitle>
        <P>We may modify the Terms at any time, at our sole discretion. If we do so, we’ll let you know either by posting the modified Terms on the Site or through other communications. It’s important that you review the Terms whenever we modify them because if you continue to use the Service after we have posted modified Terms on the Site, you are indicating to us that you agree to be bound by the modified Terms. If you don’t agree to be bound by the modified Terms, then you may not use the Service anymore. Because our Service is evolving over time we may change or discontinue all or any part of the Service, at any time and without notice, at our sole discretion.</P>
        <SubTitle>Who May Use the Service</SubTitle>
        <SubTitle>Eligibility</SubTitle>
        <P>You may use the Service only if you are 13 years of age or older and are not barred from using the Service under applicable law.</P>
        <SubTitle>Registration and Your Information</SubTitle>
        <P>If you want to use certain features of the Service you’ll have to create an account (“Account”). It’s important that you provide us with accurate, complete and up-to-date information for your Account and you agree to update such information, as needed, to keep it accurate, complete and up-to-date. If you don’t, we might have to suspend or terminate your Account. You agree that you won’t disclose your Account password to anyone and you’ll notify us immediately of any unauthorized use of your Account. You’re responsible for all activities that occur under your Account, whether or not you know about them.</P>
        <SubTitle>Twilio Short & Long Code Terms of Service</SubTitle>
        <P>When you provide your phone number opt-in to the service, we will send you an SMS message to confirm your signup.
          By providing your phone number, you agree that we may send you SMS messages in response to SMS messages you send to us, such as when you send a reference image or code to us by SMS. In addition, by registering to use the service, you agree to receive SMS messages sent using an automatic telephone dialing system to inform you of the following: opportunities to join or create albums relevant to you; new photos added to your albums; comments, or reactions added to your photos; new matching photos or links to them based on a code you sent us, your location and proximity to photos taken; or invitations from other users of the Service
          You can cancel the SMS service at any time. Just text “STOP” to +1 (469) 715-3452. After you send the SMS message “STOP” to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SM</P>
      </SubContainer>
    </Container>
  );
};

export default Terms;