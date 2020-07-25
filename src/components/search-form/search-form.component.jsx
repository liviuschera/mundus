import React from 'react';

import { Form } from './search-form.styles';
import FormInput from '../form-input/form-input.component';

export default function SearchForm({ onInputChange, inputCountry }) {
  return (
    <Form>
      <FormInput
        type="search"
        name="search-country"
        placeholder="Search for a country..."
        value={inputCountry}
        onChange={onInputChange}
      />
    </Form>
  );
}
