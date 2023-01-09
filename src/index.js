import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import './index.css';

const theRoot = document.querySelector('#root');


ReactDOM.createRoot(theRoot).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
