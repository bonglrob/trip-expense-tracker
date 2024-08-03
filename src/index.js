import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import CURRENCIES_NAMES from "./data/currencyNames.json";
import SAMPLE_EXPENSES from "./data/expenses.json";
import SAMPLE_TRIPS from "./data/trips.json";

  // Fetch Frankfurther API: https://github.com/hakanensari/frankfurter
  // const CURRENCY_API_URL = 'https://api.frankfurter.app';

  // get currencies rates
  // fetch(`https://${HOST}/latest?amount=10&from=USD&to=KRW, JPY`) 
  //   .then(resp => resp.json())
  //   .then((data) => {
  //   console.log(data);
  //   }
  // );

  // call makeRequest at tripsDataForm submit 
  //  
  // function makeRequest() {
  //   fetch(`${CURRENCY_API_URL}/${startDate}/?from=${mainCurrency}&to={altCurrency}`)
  //     .then(statusCheck)
  //     .then(res => res.json())
  //     .then(data => setTripsDataArray(data))
  //     .catch(console.error);
  // }

  // get mainCurrency (base) from startDate and altCurrency
  // https://api.frankfurter.app/2024-01-01?from=USD&to=GBP,EUR
  // {"amount":1.0,"base":"USD","date":"2023-12-29","rates":{"EUR":0.90498,"GBP":0.78647}}

  // get currencyNames (see currencyNames.json for example)
  // fetch(`https://${HOST}/currencies`) 
  //   .then(resp => resp.json())
  //   .then((data) => {
  //   console.log(data);
  //   }
  // );


  // e.g. KRW, JPY
  // let currencyRates = currencyNames.rates;
  // Object.keys(currencyRates).forEach(currency => {
  //   console.log(currency, currencyRates[currency]);
  // });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App expenses={SAMPLE_EXPENSES} currencyNames={CURRENCIES_NAMES} tripsData={SAMPLE_TRIPS}/>
    </BrowserRouter>
  </React.StrictMode>
);