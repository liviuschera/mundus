import React, { useState, useContext } from 'react';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './global.styles.js';
import ThemeContext from './contexts/theme.context';

import themeConfig from './theme-config.styles';

import Homepage from './pages/homepage.component';

function App() {
  const [theme, setTheme] = useState(false);
  const value = { theme, setTheme };
  return (
    <>
      <ThemeContext.Provider value={value}>
        <ThemeProvider theme={themeConfig}>
          <GlobalStyle darkTheme={theme} />
          <Homepage />
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
