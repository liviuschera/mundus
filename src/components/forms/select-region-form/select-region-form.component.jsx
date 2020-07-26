import React from 'react';

// import { FormWrapper } from '../search-form/search-form.styles';
import { FormWrapper } from './select-region-form.styles';
import Select from '../select/select.component';

export default function SelectForm({ onSelectChange, region, regionsArray }) {
  return (
    <FormWrapper>
      <Select
        onChange={onSelectChange}
        defaultValue={region}
        region={region}
        regionsArray={regionsArray}
        name="select-region"
      ></Select>
    </FormWrapper>
  );
}
