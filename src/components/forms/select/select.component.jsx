import React from 'react';

import { SelectEl } from './select.styles';

export default function Select({ onSelectChange, region }) {
  return (
    <Select value={region} onChange={onSelectChange}>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </Select>
  );
}
