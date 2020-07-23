import { createContext } from 'react';

const ThemeContext = createContext({
  theme: false,
  setTheme: () => {},
});

export default ThemeContext;
