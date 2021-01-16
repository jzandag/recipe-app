import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// CSS related imports
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import "../src/main.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);