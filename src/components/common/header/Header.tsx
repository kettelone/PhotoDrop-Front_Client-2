import React from "react";
import styled from "styled-components";
import photoDrop from "../../../assets/photoDrop.svg";

const StyledHeader = styled.header`
  display: flex;
  height: 55px;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #f1f0ec;
  border-bottom: 1px solid #f1f0ec;
  padding: 1.15em 0em;
  @media only screen and (min-width: 740px) {
    height: 60px;
  }
`;

const Img = styled.img`
  @media only screen and (min-width: 740px) {
    width: 179px;
    height: 22px;
  }
`;

const Header = () => {
  return (
    <StyledHeader id="header">
      <Img src={photoDrop} alt="photoDrop" />
    </StyledHeader>
  );
};

export default Header;
