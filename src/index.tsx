import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { App } from './app';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: rgba(1, 42, 74, 0.2);
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);