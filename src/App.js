import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import EmptyBalances from './components/EmptyBalances';
import FilledBalances from './components/FilledBalances';
import Stats from './components/Stats';
import { CreateExpenseForm } from './components/CreateExpenseForm.js';
import FilterExpensesForm from './components/FiltersExpensesForm.js';
import Expenses from './components/Expenses.js';
import MyTrips from './components/MyTrips.js';
import CreateTrip from './components/CreateTrip.js';
import { Navigate } from 'react-router-dom';

export default function App({ expenses, currencyNames }) {
  const expensesData = expenses;

  const [mainCurrency, setMainCurrency] = useState("USD");
  const [altCurrency, setAltCurrency] = useState("KRW");
  const [members, setMembers] = useState([]); // New state to hold members array
  const numMembers = members.length

  console.log(mainCurrency);
  console.log(altCurrency);
  console.log(members); // Add this to log the members array

  function mainCurrencySet(currency) {
    setMainCurrency(currency);
  }

  function altCurrencySet(currency) {
    setAltCurrency(currency);
  }

  function sendTripData(currency, altCurrency) {
    setMainCurrency(currency);
    setAltCurrency(altCurrency);
  }

  return (
    <div>
      {/* <Header> goes here */}
      <main>
        <Routes>
          <Route path="/emptybalances" element={<EmptyBalances />} />
          <Route path="/filledbalances" element={<FilledBalances />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/expenses" element={<Expenses expensesData={expensesData} />} >
            <Route index element={<FilterExpensesForm />}></Route>
            {/* <Route path="/expenses/:expenseId" element={<CreateExpenseForm mainCurrency={mainCurrency} altCurrency={altCurrency} />} /> */}
          </Route>
          <Route path="/expenses/create" element={<CreateExpenseForm mainCurrency={mainCurrency} altCurrency={altCurrency} />} />
          <Route path="/mytrips" element={<MyTrips numMembers={numMembers}/>} />
          <Route path="/createtrip" element={<CreateTrip currencyNames={currencyNames} mainCurrencyCallback={mainCurrencySet} altCurrencyCallback={altCurrencySet} setMembersCallback={setMembers} sendTripDataCallback={sendTripData} />} />
          <Route path="/*" element={<Navigate to="/expenses" />} />
        </Routes>
      </main>
      {/* <Footer> goes here */}
    </div>
  );
}