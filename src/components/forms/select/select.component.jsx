import React from 'react';

import { SelectEl } from './select.styles';

export default function Select({ ...props }) {
  return (
    <SelectEl {...props}>
      {console.log("select component props: ",props)}
      {props.regionsarray.map((region) => {
        let uid = Math.random().toString(16).substring(2, 11)
        return (
          <option key={uid} value={region.value}>
            {region.label}
          </option>
        );
      })}
    </SelectEl>
  );
}
