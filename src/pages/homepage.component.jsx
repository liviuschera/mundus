import React, { useEffect, useState } from 'react';

import { HomepageWrapper } from './homepage.styles';

import connectToAPI from '../utils/connect-to-api';
import SearchForm from '../components/search-form/search-form.component';
import CountryCardList from '../components/country-card-list/country-card-list.component';

export default function Homepage(params) {
  const [countries, setCountries] = useState([]);
  const [inputCountry, setInputCountry] = useState('');

  async function getCountries() {
    (async function (params) {
      const resp = await connectToAPI(
        'https://restcountries.eu/rest/v2/all',
        'GET'
      );
      setCountries(resp);
      console.log(resp);
    })();
  }

  function onInputChange(event) {
    setInputCountry(event.target.value);
  }

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <HomepageWrapper>
      <SearchForm onInputChange={onInputChange} countries={countries} />
      <CountryCardList countries={countries} inputCountry={inputCountry} />
    </HomepageWrapper>
  );
}
