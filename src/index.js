import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const domElement = document.createElement('div');
domElement.id = 'hover-widget'
document.body.appendChild(domElement)
const root = ReactDOM.createRoot(domElement);
root.render(
  <React.StrictMode>
    <App product="hover" />
  </React.StrictMode>
);
