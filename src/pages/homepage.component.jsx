import React, { useEffect, useState } from 'react';

import { HomepageWrapper } from './homepage.styles';

import connectToAPI from '../utils/connect-to-api';
import Header from '../components/header/header.component';
import CountryCardList from '../components/country-card-list/country-card-list.component';

export default function Homepage(params) {
  const [countries, setCountries] = useState([]);

  async function getCountries() {
    const response = await fetch('https://restcountries.eu/rest/v2/name/r');
    const data = await response.json();
    console.log(data);
  }
  useEffect(() => {
    // getCountries();
    (async function (params) {
      const resp = await connectToAPI(
        'https://restcountries.eu/rest/v2/name/ro',
        'GET'
      );
      setCountries(resp);
      console.log(resp);
    })();
  }, []);

  return (
    <HomepageWrapper>
      <Header />
      <CountryCardList countries={countries} />
    </HomepageWrapper>
  );
}
