import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '../../../app/hooks';
import defaultImage from '../../../assets/defaultImage.svg';
import { PROFILE_ROUTE } from '../../../utils/consts';
import { Container, Img,P, PhotoIcon, SubContainer, SubTitle, Title } from './components'
const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  const selfie = useAppSelector(state => state.userUpdate.selfieUrl)
  const navigate = useNavigate()
  return (
    <Container>
      <PhotoIcon
        onClick={() => navigate(PROFILE_ROUTE, { state: '/privacy-policy' })}
      >
        <Img src={selfie || defaultImage} alt="selfie" />
      </PhotoIcon>
      <SubContainer>
      <Title>Privacy Policy</Title>
      <P>Your privacy is very important to us. Accordingly, we have developed this Privacy Policy in order for you to understand how we collect, use, and disclose information that we receive through our Service. The FOM Online, Inc. (“PhotoDrop,” “us,” “we,” or “our”) website available at photodrop.me and the PhotoDrop photo finding service (together, the “Service”) are owned and operated by PhotoDrop. This Privacy Policy does not apply to any third party websites, services or applications, even if they are accessible through our Service. Also, please note that, unless we define a term in this Privacy Policy, all capitalized terms used in this Privacy Policy have the same meanings as in our Terms of Service. So, please make sure that you have read and understand our Terms of Service.</P>
      <SubTitle>User Consent</SubTitle>
      <P>By accessing or otherwise using the Service, you agree to the terms and conditions of this Privacy Policy and the associated Terms of Service (set forth on PhotoDrop) you expressly consent to the processing of your Personal Information (as defined below) and Anonymous Information (as defined below) according to this Privacy Policy.</P>
      <P>Your Personal Information may be processed by us in the country where it was collected and transferred to, and maintained on, computers located outside of your state, province, country (including the United States), or other governmental jurisdiction where privacy laws regarding processing of Personal Information may be less stringent than the laws in your country. If you’re located outside the United States and choose to provide your Personal Information to us, we may transfer your Personal Information to the United States and process it there.</P>
      <SubTitle>Regarding Children</SubTitle>
      <P>Children under the age of 13 are not permitted to use the Service and we do not intentionally collect or maintain Personal Information from those who are under 13 years old. Protecting the privacy of children is very important to us. Thus, if we obtain actual knowledge that a user is under 13, we will take steps to remove that user’s Personal Information from our databases. We recommend that children between the ages of 13 and 18 obtain their parent’s permission before submitting information over the internet. By using the Service, you are representing that you are at least 18 years old, or that you are at least 13 years old and have your parents’ permission to use the Service.</P>
      <SubTitle>Collection and Use of Information</SubTitle>
      <P>Our Service is designed to help you more easily identify photos of yourself, to share those photos with other users, and to connect and share photos with friends and other users. You are in control of what information you share with the Service and nothing you provide is automatically shared with others unless you tell PhotoDrop via your settings to send photos to other users without your review. We provide you with settings to allow you to control your level of approval for your photos, and if you no longer want to be identified in a certain photo you can simply untag it.</P>
      <P>Our primary goals in collecting information are to provide and improve our Service, to administer your use of the Service (including your Account, if you are an Account holder), and to enable you to enjoy and easily navigate our Service.</P>
      <SubTitle>Personal Information</SubTitle>
      <P>In general, we collect information that can be used to identify you, such as your name, email address, and phone number (“Personal Information”) that you submit to us voluntarily through the Service, including Personal information that you submit in the process of creating or editing your Account and user profile on the Service. For example, our registration and login process requires you to provide us with your name, mobile phone number, valid email address and password of your choice.</P>
      <P>When you personalize your profile and use the features of the Service, we will collect any Personal Information you voluntarily provide, and we may also request optional non-personal information to support your use of the Service, such as your year of birth, gender and other demographic information. We refer to such information as “Anonymous Information” because it cannot be used by itself to identify you and therefore is not Personal Information. We collect information in the form of the User Content that you submit during your use of the Service, such as photos, comments, ratings and other information you choose to submit.</P>
      <P>We also collect the information you provide when you use the Service. This can include information in or about the User Content you provide, such as the location of a photo or the date a file was created. If you connect to us from a social network, we also will be able to access and collect Personal Information about you and your friends that your privacy settings on the social network permit us to access. For instance, we may collect your user ID or profile information that you have permitted to be displayed through the Service in order to display you as a friend or in association with your prof</P>
      </SubContainer>
    </Container>
  );
};

export default PrivacyPolicy;