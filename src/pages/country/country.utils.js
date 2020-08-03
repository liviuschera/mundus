import React from 'react';

import CustomLink from '../../components/custom-link/custom-link.component';

export function listItems(items) {
  return items.map((item, index) => {
    return (
      <span key={item?.name ?? item}>
        {item?.name ?? item}
        {items.length - 1 === index ? '' : ', '}
      </span>
    );
  });
}

export function makeArryOfBorderCountries(countriesArray, country) {
  const borderCountries = country.borders;
  const borderCountriesArray = [];

  countriesArray.filter((count) => {
    if (borderCountries.includes(count.alpha3Code)) {
      borderCountriesArray.push(count);
    }
  });
  return borderCountriesArray;
}

export function displayBorderLinks(borderCountries, filteredCountries) {
  if (borderCountries.length < 1) return 'None';
  return borderCountries.map((borderCountry) => {
    // console.log(borderCountry);
    return (
      <CustomLink
        key={borderCountry.name}
        to={{
          pathname: `/country/${borderCountry.name
            .toLowerCase()
            .replace(/\s/g, '-')}`,
          state: { country: borderCountry, filteredCountries },
        }}
      >
        {borderCountry.name.replace(/\(.+?\)/, '')}
      </CustomLink>
    );
  });
}
