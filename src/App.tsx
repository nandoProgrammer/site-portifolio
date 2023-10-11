import React, { Fragment } from 'react';

import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';

import theme from './styles/Theme';
import { Layouts } from './layouts/layouts';

function App() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Layouts/>
      </ThemeProvider>
    </Fragment>
  )
}

export default App;