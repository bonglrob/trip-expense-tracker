import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import CURRENCIES_NAMES from "./data/currencyNames.json";
import SAMPLE_EXPENSES from "./data/emptyExpenses.json";

  // Fetch Frankfurther API: https://github.com/hakanensari/frankfurter
  // const host = 'api.frankfurter.app';

  // get currencies rates
  // fetch(`https://${host}/latest?amount=10&from=USD&to=KRW, JPY`) 
  //   .then(resp => resp.json())
  //   .then((data) => {
  //   console.log(data);
  //   }
  // );

  // get currencies
  // fetch(`https://${host}/currencies`) 
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
    

  //get sorted list of unique teamNames. reduce array of objects into array of strings, 
  //convert to Set to get uniques, spread back into array, and sort 
  // const currencies = [...new Set(props.gameData.reduce((all, current) => {
  //   return all.concat([current.winner, current.runner_up]);
  // }, []))].sort();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App expenses={SAMPLE_EXPENSES} currencyNames={CURRENCIES_NAMES}/>
    </BrowserRouter>
  </React.StrictMode>
);