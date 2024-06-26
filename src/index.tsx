import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// const rootElement = document.getElementById('root') as HTMLElement;
// const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/VocabBuilder">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
