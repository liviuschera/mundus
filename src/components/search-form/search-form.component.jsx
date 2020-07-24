import React from 'react';

import { Form } from './search-form.styles';
import FormInput from '../form-input/form-input.component';

export default function SearchForm() {
  return (
    <Form>
      <FormInput
        type="search"
        name="search-country"
        placeholder="Search for a country..."
      />
    </Form>
  );
}
