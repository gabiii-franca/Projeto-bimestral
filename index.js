import React from "react";
import {Link} from "react-router-dom";
import { Container } from "./styles";

export default function Login() {
  return (
    <Container>
      <div>
        <form>
          <p>
            Fazer Login
          </p>
          <input type="text" placeholder="Nome" />
          <input type="passwork"  placeholder="Senha"/>
          <button type="submit">Entrar</button>
          <Link to="/Cadastrar">Cadastrar</Link>
          <br/>
          <Link to="/EsqueceuSenha">Recuperar Senha</Link>      
        </form>
       
       </div>
      
    </Container>
    
  );
}
