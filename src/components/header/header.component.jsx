import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HeaderWrapper, Heading, ThemeSwitcher } from './header.styles';

import ThemeContext from '../../contexts/theme.context';

export default function Header(params) {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <HeaderWrapper>
      <Link to="/">
        <Heading>Mundus</Heading>
      </Link>
      <ThemeSwitcher onClick={() => setTheme(!theme)}>
        {theme ? '🌞 Light mode' : '🌛 Dark Mode'}
      </ThemeSwitcher>
    </HeaderWrapper>
  );
}
