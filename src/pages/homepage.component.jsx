import React, { useEffect, useState } from 'react';

import { HomepageWrapper, FormSection } from './homepage.styles';

import connectToAPI from '../utils/connect-to-api';
import SearchForm from '../components/forms/search-form/search-form.component';
import SelectForm from '../components/forms/select-region-form/select-region-form.component';
import CountryCardList from '../components/country-card-list/country-card-list.component';

export default function Homepage(params) {
  // const [countries, setCountries] = useState([]);
  const [selectRegion, setSelectRegion] = useState('');
  const [inputCountry, setInputCountry] = useState('');

  const useFetch = (url) => {
    const [data, setData] = useState(null);

    async function fetchData() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    }

    useEffect(() => {
      fetchData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]);
    return data;
  };
  function onInputChange(event) {
    setInputCountry(event.target.value);
  }

  function onSelectChange(event) {
    setSelectRegion(event.target.value);
  }

  const countries = useFetch('https://restcountries.eu/rest/v2/all');
  console.log(countries);

  // useEffect(() => {
  //   async function getCountries() {
  //     const response = await fetch('https://restcountries.eu/rest/v2/all');
  //     const data = response.json();
  //     setCountries(data);
  //     console.log(data);
  //   }
  //   getCountries();
  // }, []);

  // useEffect((selectRegion) => {
  //   async function getRegion(selectRegion) {
  //     const response = await fetch(
  //       `https://restcountries.eu/rest/v2/region/${selectRegion}`
  //     );
  //     const data = response.json();
  //     setSelectRegion(data);
  //   }
  //   getRegion(selectRegion);
  // }, []);

  return (
    <HomepageWrapper>
      <FormSection>
        <SearchForm onInputChange={onInputChange} countries={countries} />
        {/* <SelectForm onSelectChange={onSelectChange} region={selectRegion} /> */}
      </FormSection>
      {countries ? (
        <CountryCardList countries={countries} inputCountry={inputCountry} />
      ) : (
        <h1>Loading...</h1>
      )}
    </HomepageWrapper>
  );
}
