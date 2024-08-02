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

  // example TripsDataArray[0] data: 
  // [
  //   { 
  //   tripName: "Korea", 
  //   members: ["Kevin", "Michelle", "Josh", "Kara"], 
  //   startDate: "12/20/2023", 
  //   currency: {
  //     "main": { value: "USD", label: "USD - United States Dollar" } 
  //     "alt": [{ value: "KRW", label: "KRW - South Korean Won" }, { value: "JPY", label: "JPY - Japanese Yen" }]
  //     } 
  //   },
  // ]

  /// An array of trip objects
  // initialize trips.json sample data used for debugging feature 2: 
  const [tripsDataArray, setTripsDataArray] = useState([...tripsData]);
  console.log(tripsDataArray); // Use this to debug and make sure you are getting trips data



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
          <Route path="/expenses/:tripName" element={<Expenses expensesData={expensesData} />}></Route>
          {/* <Route path="/expenses" element={<Expenses expensesData={expensesData} />} > */}
            {/* {<Route index element={<FilterExpensesForm />}></Route>} */}
            {/* <Route path="/expenses/:expenseId" element={<CreateExpenseForm mainCurrency={mainCurrency} altCurrency={altCurrency} />} /> */}
          {/* </Route>                          */}
          <Route path="/expenses/create" element={<CreateExpenseForm tripsDataArray={tripsDataArray} />} />
          <Route path="/mytrips" element={<MyTrips tripsDataArray={tripsDataArray} />} />
          <Route path="/createtrip" element={<CreateTripForm onSubmit={handleTripFormSubmit} currencyNames={currencyNames} />} />
          <Route path="/*" element={<Navigate to="/expenses/create" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}