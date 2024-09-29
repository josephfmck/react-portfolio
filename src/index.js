import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Check the environment and set the basename accordingly
const routingBase = process.env.NODE_ENV === 'production' ? '/react-portfolio' : '';


//router for paths to different pages
root.render(
  <React.StrictMode>
    <BrowserRouter basename={routingBase}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
