import React from 'react';
import { Link } from 'react-router-dom';
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
  const filteredCountries = params.location.state.filteredCountries;
  console.log(country);
  console.log(filteredCountries);

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

  function makeArryOfBorderCountries(countriesArray) {
    const borderCountries = country.borders;
    const borderCountriesArray = [];

    countriesArray.filter((count) => {
      if (borderCountries.includes(count.alpha3Code)) {
        borderCountriesArray.push(count);
      }
    });
    return borderCountriesArray;
  }

  const borderCountries = makeArryOfBorderCountries(filteredCountries);
  console.log(borderCountries);
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
        <Info>
          <strong>Border Countries: </strong>
          {borderCountries.map((borderCountry) => {
            console.log(borderCountry);
            return (
              <Link
                key={borderCountry.name}
                to={{
                  pathname: `/country/${borderCountry.name
                    .toLowerCase()
                    .replace(/\s/g, '-')}`,
                  state: { country: borderCountry, filteredCountries },
                }}
              >
                {borderCountry?.name ?? 'None'}
              </Link>
            );
          })}
        </Info>
      </InfoWrapper>
    </CountryWrapper>
  );
}
