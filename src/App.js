import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import EmptyBalances from './components/EmptyBalances';
import FilledBalances from './components/FilledBalances';
import Stats from './components/Stats';
import { CreateExpenseForm } from './components/CreateExpenseForm.js';
import FilterExpenses from './components/FilterExpenses.js';
import Expenses from './components/Expenses.js';
import MyTrips from './components/MyTrips.js';
import CreateTrip from './components/CreateTrip.js';


export default function App({expenses, currencyNames}) {
  const expensesData = expenses;

  const [mainCurrency, setMainCurrency] = useState("USD");
  const [altCurrency, setAltCurrency] = useState("KRW");

  function mainCurrencySet(currency) {
    setMainCurrency(currency);
  }

  function altCurrencySet(currency) {
    setAltCurrency(currency);
  }

  return (
    <div>
      {/* <Header> goes here */}
      <main>
        <Routes>
          <Route path="/emptybalances" element={<EmptyBalances />} />
          <Route path="/filledbalances" element={<FilledBalances />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/createexpense" element={<CreateExpenseForm mainCurrency={mainCurrency} altCurrency={altCurrency} />} />
          <Route path="/expenses" element={<Expenses expensesData={expensesData} />} />
          <Route path="/filterexpenses" element={<FilterExpenses />} />
          <Route path="/mytrips" element={<MyTrips />} />
          <Route path="/createtrip" element={<CreateTrip currencyNames={currencyNames} mainCurrencyCallback={mainCurrencySet} altCurrency={altCurrency} altCurrencyCallback={altCurrencySet} />} />
        </Routes>
      </main>
      {/* <Footer> goes here */}
    </div>
  );
}