import React, {Fragment} from  'react';
import { Header } from '../components/Header/Header';
import { Router } from '../routes';

export const Layouts = () => {
    return (
      <Fragment>
        <Header/>
        <Router/>
      </Fragment>
    )
}

export default Layouts;