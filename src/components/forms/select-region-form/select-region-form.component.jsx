import React from 'react';

// import { FormWrapper } from '../search-form/search-form.styles';
import { FormWrapper } from './select-region-form.styles';
import Select from '../select/select.component';

export default function SelectForm({ onSelectChange, region, regionsarray }) {
  console.log("hello from select form. showing regionsArray: ",regionsarray);
  return (
    <FormWrapper>
      <Select
        onChange={onSelectChange}
        defaultValue={region}
        region={region}
        regionsarray={regionsarray}
        name="select-region"
      ></Select>
    </FormWrapper>
  );
}
