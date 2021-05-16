import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { App } from './components/App';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: #1A1B25;
    font-family: "Open Sans", sans-serif !important;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <h1>Context-Demo</h1>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);