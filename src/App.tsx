import React, { Fragment } from 'react';
import { Router } from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Router/>
    </Fragment>
  )
}

export default App;