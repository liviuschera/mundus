import React from 'react';
import {
  CountryWrapper,
  Flag,
  InfoWrapper,
  DetailsWrapper,
  Info,
  Name,
} from './country.styled';

export default function Country({ ...params }) {
  const country = params.location.state.country;
  console.log(country);

  function listItems(items) {
    return items.map((item, index) => {
      return (
        <span key={item?.name ?? item}>
          {item?.name ?? item}
          {items.length - 1 === index ? '' : ', '}
        </span>
      );
    });
  }
  return (
    <CountryWrapper>
      <Flag>
        <img src={country.flag} alt={`Flag of ${country.name}`} />
      </Flag>
      <InfoWrapper>
        <Name>{country.name}</Name>
        <DetailsWrapper>
          <Info>
            <strong>Native Name: </strong>
            {country.nativeName}
          </Info>
          <Info>
            <strong>Population: </strong>
            {country.population}
          </Info>
          <Info>
            <strong>Region: </strong>
            {country.region}
          </Info>
          <Info>
            <strong>Sub Region: </strong>
            {country.subregion}
          </Info>
          <Info>
            <strong>Capital: </strong>
            {country.capital}
          </Info>
          <Info>
            <strong>Top Level Domain: </strong>
            {country.topLevelDomain}
          </Info>
          <Info>
            <strong>Currencies: </strong>
            {listItems(country.currencies)}
          </Info>
          <Info>
            <strong>Languages: </strong>
            {listItems(country.languages)}
          </Info>
          <Info>
            <strong>Time Zones: </strong>
            {listItems(country.timezones)}
          </Info>
        </DetailsWrapper>
      </InfoWrapper>
    </CountryWrapper>
  );
}
