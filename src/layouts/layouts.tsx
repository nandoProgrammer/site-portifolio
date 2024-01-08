import React, {Fragment} from  'react';
import { Header } from '../components/Header/Header';
import { FooterComponent } from '../components/Footer/footer.component';
import { Router } from '../routes';

export const Layouts: React.FunctionComponent = () => {
    return (
      <Fragment>
        <Header/>
        <Router/>
        <FooterComponent />
      </Fragment>
    )
}