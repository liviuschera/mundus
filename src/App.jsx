import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './global.styles.js';
import ThemeContext from './contexts/theme.context';

import themeConfig from './theme-config.styles';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import Country from './pages/country/country.component';

function App() {
  const [theme, setTheme] = useState(false);
  const value = { theme, setTheme };
  return (
    <>
      <ThemeContext.Provider value={value}>
        <ThemeProvider theme={themeConfig}>
          <GlobalStyle darkTheme={theme} />
          <Header />
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route
            path={`/country/:countryDetails`}
            render={(routerProps) => <Country {...routerProps} />}
          />
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
