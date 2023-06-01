import React, { useState } from 'react';
import { update } from '../../../app/countrySlice/countrySlice'
import { useAppDispatch } from '../../../app/hooks' 

import {
  Container,
  SubContainer,
  HeaderContainer,
  CommonCoutries,
  Title,
  CloseButton,
  OneCountry,
  SpanCountryName,
  Separator,
  Wrapper
} from './components'
import {countries, commonCountries} from './info'; 

const CountrySelect = () => {
  const dispatch = useAppDispatch()

  const closeModal = () => {
    document.getElementById('countryModal')?.classList.remove('show')
  }

  const handleSelect = (event: any) => {
    event.preventDefault()
    const { code, dial } = event.target.dataset
    dispatch(update({ code, dial }))
    closeModal()
  }

  return (
    <Container id='countryModal'>
      <SubContainer>
      <HeaderContainer>
        <span>Select Country</span>
        <CloseButton
        onClick={closeModal}
        >Close</CloseButton>
      </HeaderContainer>
      <Wrapper>
      <CommonCoutries>
        <Title>Common countries</Title>
        {
          commonCountries.map(country =>
            <OneCountry
              onClick={handleSelect}
              data-dial={country.dial_code}
              data-code={country.code}
              key={country.name}>
              <img
                data-dial={country.dial_code}
                data-code={country.code}
                width={20}
                height={20}
                src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${country.code}.svg`}
                alt={country.code}
              />
              <SpanCountryName
                data-dial={country.dial_code}
                data-code={country.code}
              >{country.name}</SpanCountryName>
            </OneCountry>
          )
        }
        <Separator></Separator>
      </CommonCoutries>
      {
        countries.map(country => 
          <OneCountry
            onClick={handleSelect}
            data-dial={country.dial_code}
            data-code={country.code}
            key={country.name}
          >
            <img
              data-dial={country.dial_code}
              data-code={country.code}
              width={20}
              height={20}
              src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${country.code}.svg`}
              alt={country.code}
            />
            <SpanCountryName
              data-dial={country.dial_code}
              data-code={country.code}
            >{country.name}</SpanCountryName>
          </OneCountry>
        )
        }
        </Wrapper>
      </SubContainer>
    </Container>
  );
};

export default CountrySelect;