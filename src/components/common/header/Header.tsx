import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import photoDrop from '../../../assets/photoDrop.svg'
import { MAIN_DASHBOARD_ROUTE } from '../../../utils/consts';

const StyledHeader = styled.header`
  display:flex;
  height:55px;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #F1F0EC;
  border-bottom: 1px solid #F1F0EC;
  padding: 1.15em 0em;
  @media only screen and (min-width: 740px) {
  height:60px;
}
`

const Img = styled.img`
@media only screen and (min-width: 740px) {
	width: 179px;
  height: 22px;
}
`

const Header = () => {
  return (
    <StyledHeader id="header">
      <Link to={MAIN_DASHBOARD_ROUTE}>
        <Img src={photoDrop} alt='photoDrop' />
      </Link>
    </StyledHeader>
  );
};

export default Header;