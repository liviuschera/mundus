import React from 'react';
import { Link } from 'react-router-dom';
import {
  CardWrapper,
  DetailsContainer,
  Flag,
  Name,
  Info,
} from './country-card.styles';

export default function CountryCard({ country, filteredCountries }) {
  const newTo = {
    pathname: `/country/${country.name.toLowerCase().replace(/\s/g, '-')}`,
    state: { country, filteredCountries },
  };

  return (
    <Link to={newTo}>
      <CardWrapper>
        <Flag>
          <img src={country.flag} alt="" />
        </Flag>
        <DetailsContainer>
          <Name>{country.name}</Name>
          <div>
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
          </div>
        </DetailsContainer>
      </CardWrapper>
    </Link>
  );
}
