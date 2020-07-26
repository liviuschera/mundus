import React from 'react';

import { FormWrapper } from './search-form.styles';
import Input from '../input/input.component';

export default function SearchForm({ onInputChange, inputCountry }) {
  return (
    <FormWrapper>
      <Input
        type="search"
        name="search-country"
        placeholder="Search for a country..."
        value={inputCountry}
        onChange={onInputChange}
      />
    </FormWrapper>
  );
}
