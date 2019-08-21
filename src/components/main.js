import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./landingpage";
import Acercademi from "./AcercaDeMi";
import Contacto from "./Contacto";
import Proyectos from "./Proyectos";
import Curriculum from "./Curriculum";

const Main = () => (
  <Switch>
    <Route exact path="/cv-portafolio/" component={LandingPage} />
    <Route path="/acercademi" component={Acercademi} />
    <Route path="/contacto" component={Contacto} />
    <Route path="/proyectos" component={Proyectos} />
    <Route path="/curriculum" component={Curriculum} />
  </Switch>
);

export default Main;
