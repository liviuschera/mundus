import React, { useContext } from 'react';

import { HeaderWrapper, Heading, ThemeSwitcher } from './header.styles';

import ThemeContext from '../../contexts/theme.context';

export default function Header(params) {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <HeaderWrapper>
      <Heading>What Country would you like to know about?</Heading>
      <ThemeSwitcher onClick={() => setTheme(!theme)}>
        {theme ? '🌞 Light mode' : '🌛 Dark Mode'}
      </ThemeSwitcher>
    </HeaderWrapper>
  );
}
