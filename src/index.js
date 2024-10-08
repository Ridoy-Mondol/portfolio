import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from './component/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
);
reportWebVitals();
