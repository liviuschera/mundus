import React from 'react';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './global.styles.js';

import theme from './theme.styles';

import Homepage from './pages/homepage.component';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Homepage />
      </ThemeProvider>
    </>
  );
}

export default App;
