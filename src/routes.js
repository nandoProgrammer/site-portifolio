import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./Pages/Home";
import Projetos from "./Pages/Projetos";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { Projetos }  path="/projetos" />
       </BrowserRouter>
   )
}

export default Routes;