import React from 'react';
import logo from './logo.svg';
import styled from "styled-components";
import { Button } from 'reactstrap';
import './App.css';

import StyledButton from "./components/Button";

const WrapperDiv = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

const BlueH1 = styled.h1`
  color: #7F7FFF;
`;

function App() {
  return (
    <>
      <Button color="danger">REACTSTRAP BUTTON!</Button>
      <WrapperDiv>
        <BlueH1>Styled Components Playground</BlueH1>
        <StyledButton type="primary">Primary</StyledButton>
        <StyledButton type="success">Success</StyledButton>
        <StyledButton type="danger">Danger</StyledButton>
        <StyledButton type="warning">Warning</StyledButton>
      </WrapperDiv>
    </>
  );
}

export default App;
