import React, {useState } from 'react';

import {MAIN_DASHBOARD_ROUTE } from '../../../utils/consts';
import CropSelfie from '../../modals/cropSelfie/CropSelfie';
import {
  Circle,
  Container,
  Horizontal,
  IconContainer,
  Input,
  InputWrapper,
  PlusContainer,
  SubTitle,
  Title,
  Vertical,
  Wrapper} from './components'
import personIcon from './personIcon.svg'

const AddSelfie = () => {

  const [selectedFile, setSelectedFile] = useState<null | File>(null)

  const selectPhoto = (event: any) => {
    if (event.target.files) { 
      document.getElementById('initialSelfie')?.classList.add('show')
      document.getElementById('background')?.classList.add('show')

      setSelectedFile(event.target.files[0])
    }
  }

  return (
    <Wrapper>
      <CropSelfie selfie={selectedFile} page={MAIN_DASHBOARD_ROUTE} />
      <Container>
      <Title> Add a selfie</Title>
      <SubTitle>A selfie allows your photos to be synced with your account.</SubTitle>
      <IconContainer>
        <img src={personIcon} alt='icon' />
          <Circle htmlFor="imageOnly"> 
          <InputWrapper>
            <Input
              type="file"
              id="imageOnly"
              onChange={selectPhoto}
              accept="image/*"
            />
            <PlusContainer>
              <Horizontal />
              <Vertical />
            </PlusContainer>
            </InputWrapper>
          </Circle>
        </IconContainer>
      </Container>
    </Wrapper>
  );
};

export default AddSelfie;