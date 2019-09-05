import styled from "styled-components";

export const Container = styled.div`
  background: #FFFFFF;
  color: #FFFFFF;
  height: 100%;
  background-size: contain;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background: #00b894;
  }
 
  form {
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);

  p{
    color: black;
    text-align: center;
    font-size:2.9em;
    font-family: 'Times New Roman';
  }
  input,
  button {
    width: 100%;
  }

  input,
  button {
    height: 30px;
    border: 0;
    font-size: 1.2em;
    outline: 0;
    font-family: 'Times New Roman';
  }

  input {
    background: #dfe6e9;
    color: #000000;
    padding: 0 17px;
    margin-top: 10px;
  }

  button {
    margin-top: 20px;
    margin-bottom: 80px;
    font-weight: bold;
    font-family: 'Times New Roman';
    background: #182C61;
    color: #ffffff;
  }
  a{
    color: black;
  }
`;
