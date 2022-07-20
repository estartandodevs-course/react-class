import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/reset.css';

const elementRootFromHtml = document.getElementById('root');

const root = ReactDOM.createRoot(elementRootFromHtml);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

