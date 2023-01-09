import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'

const theRoot = document.querySelector('#root');


ReactDOM.createRoot(theRoot).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
