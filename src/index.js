import React from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './App'
// import './index.css';
const theRoot = document.querySelector('#root');


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
    theRoot)

