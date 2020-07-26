import React, { useEffect, useState } from 'react';

import { HomepageWrapper, FormSection } from './homepage.styles';

import SearchForm from '../components/forms/search-form/search-form.component';
import SelectForm from '../components/forms/select-region-form/select-region-form.component';
import CountryCardList from '../components/country-card-list/country-card-list.component';

export default function Homepage() {
  const regionsArray = [
    { label: 'Filter by Region', value: 'Filter by Region' },
    { label: 'Africa', value: 'Africa' },
    { label: 'Americas', value: 'Americas' },
    { label: 'Asia', value: 'Asia' },
    { label: 'Europe', value: 'Europe' },
    { label: 'Oceania', value: 'Oceania' },
  ];
  const [selectRegion, setSelectRegion] = useState('Filter by Region');
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

  const countriesUrl =
    selectRegion === 'Filter by Region'
      ? 'https://restcountries.eu/rest/v2/all'
      : `https://restcountries.eu/rest/v2/region/${selectRegion}`;

  const countries = useFetch(countriesUrl);

  return (
    <HomepageWrapper>
      <FormSection>
        <SearchForm onInputChange={onInputChange} countries={countries} />
        <SelectForm
          onSelectChange={onSelectChange}
          region={selectRegion}
          regionsArray={regionsArray}
        />
      </FormSection>
      {countries ? (
        <CountryCardList
          countries={countries}
          inputCountry={inputCountry}
          selectRegion={selectRegion}
        />
      ) : (
        <h1>Loading...</h1>
      )}
    </HomepageWrapper>
  );
}
