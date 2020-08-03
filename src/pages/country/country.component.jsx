import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  PageWrapper,
  CountryWrapper,
  Flag,
  InfoWrapper,
  DetailsWrapper,
  Info,
  Name,
  Header,
} from './country.styled';
import CustomLink from '../../components/custom-link/custom-link.component';

import { GoogleMap, useGoogleMap, useLoadScript } from '@react-google-maps/api';
import mapStyles from '../../mapStyles';
import {
  makeArryOfBorderCountries,
  listItems,
  displayBorderLinks,
} from './country.utils';

export default function Country({ ...params }) {
  const country = params.location.state.country;
  const filteredCountries = params.location.state.filteredCountries;
  console.log(country);
  // console.log(filteredCountries);

  const borderCountries = makeArryOfBorderCountries(filteredCountries, country);
  const history = useHistory();
  console.log(history);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const mapContainerStyles = {
    width: '100%',
    height: '100%',
  };

  const center = {
    lat: country.latlng[0],
    lng: country.latlng[1],
  };

  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
  };

  return (
    <PageWrapper>
      <CustomLink as="button" onClick={() => history.goBack()} button>
        <span>&larr;</span> Back
      </CustomLink>
      <CountryWrapper>
        {isLoaded
          ? console.log(window.google.maps.Map.prototype.getBounds())
          : 'notyet'}
        {isLoaded ? (
          <GoogleMap
            mapContainerStyles={mapContainerStyles}
            zoom={5}
            center={center}
            options={options}
          ></GoogleMap>
        ) : (
          'Loading map'
        )}

        <InfoWrapper>
          <Header>
            <Name>{country.name}</Name>
            <Flag>
              {<img src={country.flag} alt={`Flag of ${country.name}`} />}
            </Flag>
          </Header>
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
            {displayBorderLinks(borderCountries, filteredCountries)}
          </Info>
        </InfoWrapper>
      </CountryWrapper>
    </PageWrapper>
  );
}
