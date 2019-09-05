import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Cadastrar from "./pages/Cadastrar";
import Login from "./pages/Login";
import EsqueceuSenha from "./pages/EsqueceuSenha";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/Cadastrar" component={Cadastrar} />
      <Route exact path="/" component={Login} />
      <Route path="/EsqueceuSenha" component={EsqueceuSenha} />
    </BrowserRouter>
  );
}
