import React from 'react';
import { CountryCardListWrapper } from './country-card-list.styles';

import CountryCard from '../country-card/country-card.component';

export default function CountryCardList({ countries, inputCountry }) {
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(inputCountry.toLowerCase())
  );

  return (
    <CountryCardListWrapper>
      {filteredCountries.map((country) => {
        return (
          <CountryCard
            key={country.name}
            country={country}
            filteredCountries={filteredCountries}
          />
        );
      })}
    </CountryCardListWrapper>
  );
}
