
import React, { useEffect, useState } from 'react';
import Cropper from 'react-easy-crop'
import { useNavigate } from 'react-router-dom';

import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useAppDispatch } from '../../../app/hooks';
import { update } from '../../../app/userSlice/userSlice';
import closeIcon from '../../../assets/closeIcon.svg'
import albumService from '../../../service/albumService';
import selfieService from '../../../service/selfieService';
import {
  Background,
  ButtonsContainer,
  CloseButton,
  Container,
  Input,  
  Instruction,
  Label,
  Label2,
  MainContainer,
  Span,
  Title,
  Wrapper  } from './components'
import getCroppedImg from './saveCroppedImage';
import { uploadToS3 } from './uploadToS3'

import './index.css'

const CropSelfie = (props: { selfie: File |null , page:string}) => {

  const [preview, setPreview] = useState<undefined | string>()
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(-2)
  const [croppedImage, setCroppedImage] = useState<Blob | null>()
  const [isLoading, setIsLoading] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  let objectUrl = ''

  useEffect(() => {
    if (!props.selfie) {
      setPreview(undefined)
      return
    }

    objectUrl = URL.createObjectURL(props.selfie)
    setPreview(objectUrl)

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
  }, [props.selfie])


  const closeModal = () => {
    if (!disabled) {
      URL.revokeObjectURL(objectUrl)
      document.getElementById('initialSelfie')?.classList.remove('show')
      document.getElementById('background')?.classList.remove('show')
      setPreview(undefined)
    }
  }

  const handleRetake = (event: any) => {
    if (!disabled) {
      URL.revokeObjectURL(objectUrl)
      objectUrl = URL.createObjectURL(event.target.files[0])
      setPreview(objectUrl)
    }
  }


  const onCropComplete = async (croppedArea: any, croppedAreaPixels: any) => {
    try {
      if (preview) {
        const croppedImage :any = await getCroppedImg(
          preview,
          croppedAreaPixels
        )
        setCroppedImage(croppedImage)
      }
    } catch (e) {
      console.error(e)
    }
  }

  const saveSelfie = async () => {
    if (!disabled && croppedImage) {
      setDisabled(true)
      setIsLoading(true)
      try {
        const presignedPostUrl = await selfieService.signSelfie()
        await uploadToS3(croppedImage, presignedPostUrl)
        const waitFor = (delay:number) => new Promise(resolve => setTimeout(resolve, delay));
        await waitFor(3000);
            const response = await albumService.getAlbums()
            if (!response) {
              return
            }
          const { avatar } = response.data.user
          dispatch(update({ avatar }))
            setDisabled(false) 
            setIsLoading(false)
            navigate(props.page)
            closeModal()
      } catch (e) {
        console.log(e)
      }
    }
  }


  return (
    <MainContainer id='main'>
    <Background id='background' />
    <Container id="initialSelfie">
      <Wrapper id='wrapper'>
      <CloseButton
            onClick={closeModal}
            disabled={disabled}
      >
        <img src={closeIcon} alt="closeIcon" />
      </CloseButton>
      <Title>Take selfie</Title>
      <Instruction>Drag and zoom image to crop </Instruction>
        <Cropper
        image={preview}
        crop={crop}
        zoom={zoom}
        zoomWithScroll={true}
        aspect={1}
        maxZoom={3}
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
        showGrid={false}
        cropShape={'round'}
        objectFit="contain"
        initialCroppedAreaPercentages={{ width: 200, height: 200, x: 15, y: 25   }}
        classes={
          {
          containerClassName: 'containerClassName',
          mediaClassName: 'mediaClassName',
          cropAreaClassName: 'cropAreaClassName'
          }
        }
          />
          <ButtonsContainer>
              <Label
                color="white"
                backgroundColor="#262626"
                htmlFor='retakePhoto'
              > Retake</Label >
              <Input
                type="file"
                id="retakePhoto"
                onChange={handleRetake}
                accept="image/*"
                disabled={disabled}
              />
            <Span />
              <Label2
              color="none"
              backgroundColor="white"
              onClick={saveSelfie}
              >
                {isLoading
                  ? <FontAwesomeIcon icon={faSpinner} className="spinner" />
                  : 'Save'
                }
                  </Label2 >
        </ButtonsContainer>
      </Wrapper>
      </Container>
</MainContainer>
  );
};

export default CropSelfie;