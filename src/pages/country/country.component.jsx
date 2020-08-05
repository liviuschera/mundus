import React, { useEffect, useState } from 'react';
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
  ImagesContainer,
  ImageWrapper,
  HoverImage,
} from './country.styled';
import CustomLink from '../../components/custom-link/custom-link.component';

import { GoogleMap, useGoogleMap, useLoadScript } from '@react-google-maps/api';
import mapStyles from '../../mapStyles';
import {
  makeArryOfBorderCountries,
  listItems,
  displayBorderLinks,
} from './country.utils';
import useFetch from '../../utils/useFetch';

export default function Country({ ...params }) {
  const history = useHistory();
  const [isHovering, setIsHovering] = useState(false);
  const country = params.location.state.country;
  const filteredCountries = params.location.state.filteredCountries;
  console.log(country);
  // console.log(filteredCountries);

  const borderCountries = makeArryOfBorderCountries(filteredCountries, country);

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
  const searchTerm = `${country.name.toLowerCase()}`;
  console.log(
    `https://pixabay.com/api/?key=${
      process.env.REACT_APP_PIXABAY_API_KEY
    }&q=${encodeURIComponent(searchTerm)}&image_type=photo`
  );

  const countryImages = useFetch(
    `https://pixabay.com/api/?key=${
      process.env.REACT_APP_PIXABAY_API_KEY
    }&q=${encodeURIComponent(searchTerm)}&image_type=photo`
  );
  const filteredImagesArray = countryImages?.hits.filter(
    (_, index) => index < 5
  );
  function handleMouseOver(...props) {
    console.log('@@@@@@@@@@@@@@@@@@@', props);
    setIsHovering(() => !isHovering);
  }
  console.log(filteredImagesArray);

  return (
    <PageWrapper>
      <CustomLink as="button" onClick={() => history.goBack()} button>
        <span>&larr;</span> Back
      </CustomLink>
      <CountryWrapper>
        {/* {isLoaded
          ? console.log(window.google.maps.Map.prototype.getBounds())
          : 'notyet'} */}
        {isLoaded ? (
          <GoogleMap
            mapContainerStyles={mapContainerStyles}
            zoom={5}
            center={center}
            options={options}
          ></GoogleMap>
        ) : (
          'Loading map...'
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
      <ImagesContainer>
        {filteredImagesArray?.map((country) => (
          <ImageWrapper
            key={country.id}
            thumbnail={country.previewURL}
            webformatURL={country.webformatURL}
            // onMouseOver={handleMouseOver}
          >
            {/* <HoverImage src={country.webformatURL} alt=""></HoverImage> */}
            {/* <img src={country.webformatURL} alt="" /> */}
          </ImageWrapper>
        ))}
        {/* {isHovering ? <HoverImage src={country}>Is hovering</HoverImage> : null} */}
      </ImagesContainer>
    </PageWrapper>
  );
}
