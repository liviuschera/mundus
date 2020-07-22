import React, { useEffect, useState } from 'react';

import { HomepageWrapper } from './homepage.styles';

import connectToAPI from '../utils/connect-to-api';

export default function Homepage(params) {
  const [countries, setCountries] = useState([]);

  //   async function getCountries() {
  //     const response = await fetch('https://restcountries.eu/rest/v2/all');
  //     const data = await response.json();
  //     console.log(data);
  //   }
  useEffect(() => {
    // getCountries();
    (async function (params) {
      const resp = await connectToAPI(
        'https://restcountries.eu/rest/v2/name/romania',
        'GET'
      );
      // console.log(resp);
    })();
  }, []);

  return <HomepageWrapper>placeholder</HomepageWrapper>;
}
