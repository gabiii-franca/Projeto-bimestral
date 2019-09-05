import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: 14px Roboto, sans-serif;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Times New Roman';
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background: #3E3E3E;
    /* font-family: 'Roboto', sans-serif; */
  }

  h1 {
    font-size: 2em;
    font-weight: bold;
  }

  h2 {
    font-size: 2.9em;
    font-weight: bold;
  }

  a {
    color: #ffffff;
    text-decoration: none;
  }
`;
