import React from "react";
import styled from "styled-components";
import "./App.css";

// styled-component Div
const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #00261fff;
`;

// styled-component Title
const Title = styled.h1`
  font-family: sans-serif;
  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};
  font-size: 1.2em;
  margin: 1em;
  padding: 0.5em 1em;
  border-radius: 5px;
  text-align: center;
  &:hover {
    background: ${props => (props.primary ? "#c94b77" : "#f1f1f1")};
    font-weight: bold;
    border: 2px solid #c94b77;
  }
`;

// styled-component Button
const Button = styled.button`
  font-family: Arial, Helvetica, sans-serif;
  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};
  font-size: 1em;
  margin: 0.5em;
  padding: 0.5em 1.5em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background: ${props => (props.primary ? "#c94b77" : "#f1f1f1")};
    font-weight: bold;
    border: 2px solid #c94b77;
  }
`;

function App() {
  return (
    <Div>
      <Title>Nama : Masdiyono Oget</Title>
      <Title primary>
        Bootstrap Framework In CSS — Pekerjaan Rumah 11 Modul 12
      </Title>
      <div>
        <Button onClick={() => window.location.href='/portfolio.html'}>Lihat Tugas Saya</Button>
      </div>
    </Div>
  );
}

export default App;
