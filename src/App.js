import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import EmptyBalances from './components/EmptyBalances';
import FilledBalances from './components/FilledBalances';
import Stats from './components/Stats';
import { CreateExpenseForm } from './components/CreateExpenseForm.js';
import FilterExpensesForm from './components/FiltersExpensesForm.js';
import Expenses from './components/Expenses.js';
import MyTrips from './components/MyTrips.js';
import { CreateTripForm } from './components/CreateTripForm.js';
import { Navigate } from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Landing from './components/Landing.js';

export default function App({ expenses, currencyNames, tripsData }) {
  const expensesData = expenses;
  console.log(expensesData);
  

  // example TripsDataArray[0] data: 
  // [
  //   { 
  //   tripName: "Korea", 
  //   members: ["Kevin", "Michelle", "Josh", "Kara"], 
  //   startDate: "12/20/2023", 
  //   currency: {
  //     "main": { value: "USD", label: "USD - United States Dollar" } 
  //     "alt": [{ value: "KRW", label: "KRW - South Korean Won" }, { value: "JPY", label: "JPY - Japanese Yen" }],
  //     "rates": { "JPY": 148.93, "KRW": 1365.73 }
  //     } 
  //   },
  // ]

  /// An array of trip objects
  // initialize trips.json sample data used for debugging feature 2: 
  const [tripsDataArray, setTripsDataArray] = useState([...tripsData]);
  console.log(tripsDataArray); // Use this to debug and make sure you are getting trips data

  // An array of currency objects
  // const [] { ...tripFormData, currency: { ...tripFormData.currency, main: mainCurrency }

  function handleTripFormSubmit(tripFormData) {
    const updatedTripsDataArray = [...tripsDataArray, tripFormData];
    setTripsDataArray(updatedTripsDataArray);
  };

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/emptybalances" element={<EmptyBalances />} />
          <Route path="/filledbalances" element={<FilledBalances />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/expenses/:tripNameString" element={<Expenses expensesData={expensesData} tripsDataArray={tripsDataArray} />}>
            <Route path="/expenses/:tripNameString/create" element={<CreateExpenseForm tripsDataArray={tripsDataArray} />} />
            {/* {<Route index element={<FilterExpensesForm />}></Route>} */}
            {/* <Route path="/expenses/:expenseId" element={<CreateExpenseForm mainCurrency={mainCurrency} altCurrency={altCurrency} />} /> */}
          </Route>
          <Route path="/mytrips" element={<MyTrips tripsDataArray={tripsDataArray} />} />
          <Route path="/createtrip" element={<CreateTripForm onSubmit={handleTripFormSubmit} currencyNames={currencyNames} />} />
          <Route path="/*" element={<Navigate to="/mytrips" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}