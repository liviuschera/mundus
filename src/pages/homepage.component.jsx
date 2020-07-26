import React, { useEffect, useState } from 'react';

import { HomepageWrapper, FormSection } from './homepage.styles';

import connectToAPI from '../utils/connect-to-api';
import SearchForm from '../components/forms/search-form/search-form.component';
import SelectForm from '../components/forms/select-form/select-form.component';
import CountryCardList from '../components/country-card-list/country-card-list.component';

export default function Homepage(params) {
  const [countries, setCountries] = useState([]);
  const [selectRegion, setSelectRegion] = useState('');
  const [inputCountry, setInputCountry] = useState('');

  async function getCountries() {
    (async function () {
      const response = await connectToAPI(
        'https://restcountries.eu/rest/v2/all',
        'GET'
      );
      setCountries(response);
      console.log(response);
    })();
  }

  // function getRegion(selectRegion) {
  //   const response = fetch(
  //     `https://restcountries.eu/rest/v2/region/${selectRegion}`
  //   );
  //   return response;

  //   // (async function (selectRegion) {
  //   //   setSelectRegion(response);
  //   //   console.log(response);
  //   // })();
  // }

  function onInputChange(event) {
    setInputCountry(event.target.value);
  }

  function onSelectChange(event) {
    setSelectRegion(event.target.value);
  }

  useEffect(() => {
    getCountries();
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch(
  //       `https://restcountries.eu/rest/v2/region/${selectRegion}`
  //     );
  //     const data = await response.json();
  //     setSelectRegion(data);
  //   })();
  // }, [selectRegion]);

  return (
    <HomepageWrapper>
      <FormSection>
        <SearchForm onInputChange={onInputChange} countries={countries} />
        {/* <SelectForm onSelectChange={onSelectChange} region={selectRegion} /> */}
      </FormSection>
      <CountryCardList countries={countries} inputCountry={inputCountry} />
    </HomepageWrapper>
  );
}
