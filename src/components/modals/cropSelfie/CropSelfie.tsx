import React, { useEffect, useState } from "react";
import {
  MainContainer,
  Background,
  Container,
  Wrapper,
  Title,
  CloseButton,
  Instruction,
  ButtonsContainer,
  StyledButton,
  StyledButton1,
  Span,
  Input,
} from "./components";
import Cropper from "react-easy-crop";
import closeIcon from "../../../assets/closeIcon.svg";
import "./index.css";
import getCroppedImg from "./saveCroppedImage";
import selfieService from "../../../service/selfieService";
import { uploadToS3 } from "./uploadToS3";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { change } from "../../../app/selfieSlice/selfieSlice";
import { useAppDispatch } from "../../../app/hooks";
import albumService from "../../../service/albumService";

const CropSelfie = (props: { selfie: File | null; page: string }) => {
  const [preview, setPreview] = useState<undefined | string>();
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(-2);
  const [croppedImage, setCroppedImage] = useState<Blob | null>();
  const [isLoading, setIsLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  let objectUrl = "";

  useEffect(() => {
    if (!props.selfie) {
      setPreview(undefined);
      return;
    }

    objectUrl = URL.createObjectURL(props.selfie);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [props.selfie]);

  const closeModal = () => {
    URL.revokeObjectURL(objectUrl);
    document.getElementById("initialSelfie")?.classList.remove("show");
    document.getElementById("background")?.classList.remove("show");

    setPreview(undefined);
  };

  const handleRetake = (event: any) => {
    URL.revokeObjectURL(objectUrl);
    objectUrl = URL.createObjectURL(event.target.files[0]);
    setPreview(objectUrl);
  };

  const onCropComplete = async (croppedArea: any, croppedAreaPixels: any) => {
    try {
      if (preview) {
        const croppedImage: any = await getCroppedImg(
          preview,
          croppedAreaPixels
        );
        setCroppedImage(croppedImage);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const saveSelfie = async () => {
    setDisabled(true);
    if (!disabled) {
      setIsLoading(true);
      const presignedPostUrl = await selfieService.signSelfie([
        props.selfie?.name || "11.jpg",
      ]);
      try {
        if (croppedImage) {
          await uploadToS3(croppedImage, presignedPostUrl);
          const response = await albumService.getAlbums();
          if (response) {
            let { user } = response.data;
            const { avatar: selfieUrl } = user;
            localStorage.setItem("selfieUrl", selfieUrl);
          }
          //time out for page reload when selfie changed user profile
          setTimeout(() => {
            dispatch(change());
          }, 4000);

          if (props.page === "/user-dashboard") {
            setTimeout(() => {
              navigate(props.page);
              setIsLoading(false);
              closeModal();
            }, 3000);
          } else {
            navigate(props.page);
            setIsLoading(false);
            closeModal();
          }
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <MainContainer id="main">
      <Background id="background" />
      <Container id="initialSelfie">
        <Wrapper id="wrapper">
          <CloseButton onClick={closeModal}>
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
            cropShape={"round"}
            objectFit="contain"
            initialCroppedAreaPercentages={{
              width: 200,
              height: 200,
              x: 15,
              y: 25,
            }}
            classes={{
              containerClassName: "containerClassName",
              mediaClassName: "mediaClassName",
              cropAreaClassName: "cropAreaClassName",
            }}
          />
          <ButtonsContainer>
            <StyledButton
              color="white"
              backgroundColor="#262626"
              htmlFor="retakePhoto"
              // onClick={resetURL}
            >
              {" "}
              Retake
            </StyledButton>
            <Input
              type="file"
              id="retakePhoto"
              onChange={handleRetake}
              accept="image/*"
            />
            <Span></Span>
            <StyledButton1
              color="none"
              backgroundColor="white"
              onClick={saveSelfie}
            >
              {isLoading ? (
                <FontAwesomeIcon icon={faSpinner} className="spinner" />
              ) : (
                "Save"
              )}
            </StyledButton1>
          </ButtonsContainer>
        </Wrapper>
      </Container>
    </MainContainer>
  );
};

export default CropSelfie;
