import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './global.styles.js';
import ThemeContext from './contexts/theme.context';

import themeConfig from './theme-config.styles';
import Header from './components/header/header.component';
import Homepage from './pages/homepage.component';

function App() {
  const [theme, setTheme] = useState(false);
  const value = { theme, setTheme };
  return (
    <>
      <ThemeContext.Provider value={value}>
        <ThemeProvider theme={themeConfig}>
          <GlobalStyle darkTheme={theme} />
          <Header />
          <Homepage />
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
