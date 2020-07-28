import React from 'react';
import { Route } from "react-router-dom";
import { CountryCardListWrapper } from './country-card-list.styles';

import CountryCard from '../country-card/country-card.component';

export default function CountryCardList({ countries, inputCountry }) {
  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(inputCountry.toLowerCase())
  );

  return (
    <CountryCardListWrapper>
      {filteredCountries.map((country) => {
        // return <Route key={country.name} path="/country/:slug" render={(routeProps) => <CountryCard {...routeProps} country={country} />} />

        return <CountryCard key={country.name} country={country} />;
      })}
    </CountryCardListWrapper>
  );
}
