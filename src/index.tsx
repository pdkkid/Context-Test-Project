import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { App } from './app';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #ababab;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);