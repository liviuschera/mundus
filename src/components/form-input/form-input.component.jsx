import React from 'react';

import { Input } from './form-input.styles';

export default function FormInput({ ...props }) {
  console.log(props.value);
  return <Input {...props} />;
}
