import React from 'react';

import { SelectEl } from './select.styles';

export default function Select({ ...props }) {
  return (
    <SelectEl {...props}>
      {props.regionsArray.map((region) => {
        return (
          <option key={region.value} value={region.value}>
            {region.label}
          </option>
        );
      })}
    </SelectEl>
  );
}
