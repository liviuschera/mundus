import React from 'react';

import { HeaderWrapper, Heading, ThemeSwitcher } from './header.styles';

export default function Header(params) {
  return (
    <HeaderWrapper>
      <Heading>What Country would you like to know about?</Heading>
      <ThemeSwitcher>Dark Mode</ThemeSwitcher>
    </HeaderWrapper>
  );
}
