import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import SAMPLE_EXPENSES from "./data/expenses.json";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App expenses={SAMPLE_EXPENSES}/>
    </BrowserRouter>
  </React.StrictMode>
);