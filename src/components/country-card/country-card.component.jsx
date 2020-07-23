import React from 'react';

import {
  CountryCardWrapper,
  DetailsContainer,
  Flag,
  Name,
  Info,
} from './country-card.styles';

export default function CountryCard({ country }) {
  return (
    <CountryCardWrapper>
      <Flag>
        <img src={country.flag} alt="" />
      </Flag>
      <DetailsContainer>
        <Name>{country.name}</Name>
        <Info>
          <span>Population: </span>
          {country.population}
        </Info>
        <Info>
          <span>Region: </span>
          {country.region}
        </Info>
        <Info>
          <span>Capital: </span>
          {country.capital}
        </Info>
      </DetailsContainer>
    </CountryCardWrapper>
  );
}
