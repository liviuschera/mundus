import React from 'react';

import { CountryCardListWrapper } from './country-card-list.styles';

import CountryCard from '../country-card/country-card.component';

export default function CountryCardList({ countries }) {
  return (
    <CountryCardListWrapper>
      {countries.map((country) => (
        <CountryCard key={country.name} country={country} />
      ))}
    </CountryCardListWrapper>
  );
}
