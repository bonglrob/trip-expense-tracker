import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import _ from 'lodash';

import { CreateExpenseForm } from './components/CreateExpenseForm.js';
import ExpensePage from './components/ExpensePage.js';
import MyTrips from './components/MyTrips.js';
import { CreateTripForm } from './components/CreateTripForm.js';
import { Navigate } from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Landing from './components/Landing.js';
import BalancesPage from './components/BalancesPage.js';

export default function App({ expenses, tripsData }) {

  const CURRENCY_API_URL = 'https://api.frankfurter.app';

  // get currency rates on day of trip based on main currency against alt currencies (e.g. currencyRates.json)
  function fetchCurrencyRates(tripFormData) {
    let { startDate, currency } = tripFormData;
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    if (startDate >= currentDate) startDate = "latest";

    const mainCurrencyParam = currency.main.value;
    const altCurrencyArray = currency.alt;

    const altCurrencyParam = altCurrencyArray.map(currency => currency.value).join(',');

    // API startDate format YYYY/MM/DD
    fetch(`${CURRENCY_API_URL}/${startDate}?from=${mainCurrencyParam}&to=${altCurrencyParam}`)
      .then(statusCheck)
      .then(res => res.json())
      .then(data => {
        const updatedTripsDataArray =  [ ...tripsDataArray, { ...tripFormData, currency: { ...tripFormData.currency, rates: data.rates } }];
        setTripsDataArray(updatedTripsDataArray);
      })
      .catch((error) => console.error("Error fetching currency data:", error));
  }

  // get object of currency Names (e.g. currencyNames.json)
  function fetchCurrencyNames() {
    fetch(CURRENCY_API_URL + "/currencies")
      .then(statusCheck)
      .then(res => res.json())
      .then(data => {
        const updatedCurrencyNamesObj = data;
        setCurrencyNamesObj(updatedCurrencyNamesObj);
      })
      .catch((error) => console.error("Error fetching currency names:", error));
  }

  useEffect(() => {
    fetchCurrencyNames();
  }, []);

  /*
  * Checks whether it can establish a connection with frankfurter API
  *
  * @param {Object} res - promised object
  * @returns {Object} res - promised object
  */
  async function statusCheck(res) {
    if (!res.ok) {
      throw new Error(await res.text());
    }
    return res;
  }

  // An object of currency names
  const [currencyNamesObj, setCurrencyNamesObj] = useState({});

  /// An array of trip objects
  const [tripsDataArray, setTripsDataArray] = useState([...tripsData]); // testing with trips.json
  
  // An object of expenses
  const [expensesDataObj, setExpensesDataObj] = useState(expenses); // testing with expenses.json  

  const [highestId, setHighestId] = useState(1);    

  function getHighestId(tripName) {
    if (expensesDataObj[tripName].length === 0) {
      setHighestId(1);
    } else {
        const arrayOfExpenses = _.flatMap(expensesDataObj[tripName], (expense) => expense);
        const highestIdObj = _.maxBy(arrayOfExpenses, "expenseId");
        const updatedHighestId = Number(highestIdObj["expenseId"]); 
        setHighestId(updatedHighestId);
    }
  }

  function handleTripFormSubmit(tripFormData) {
    const updatedTripsDataArray = [...tripsDataArray, tripFormData];
    setTripsDataArray(updatedTripsDataArray);

    const updatedExpensesDataObj = { [tripFormData.tripName]: [] };
    setExpensesDataObj(updatedExpensesDataObj);

    // when user selects alt currencies
    if (tripFormData.currency.alt.length > 0) {
      fetchCurrencyRates(tripFormData);
    }
  };


  function handleExpenseFormSubmit(expenseFormData, tripName, hasExpense) {

    let updatedExpensesDataObj = expensesDataObj;
    // editing existing expenses
    if (hasExpense) {

    // Find the index of the object with the same id
    const index = _.findIndex(updatedExpensesDataObj[tripName], { expenseId: expenseFormData.expenseId });

    if (index !== -1) {
      updatedExpensesDataObj[tripName][index] = _.assign({}, updatedExpensesDataObj[tripName][index], expenseFormData);
    }
    console.log("inside");
    console.log("updated expenses obj", updatedExpensesDataObj);

    } else {
      // adding new expense
      updatedExpensesDataObj = {
        ...expensesDataObj,
        [tripName]: [...expensesDataObj[tripName], expenseFormData]
      };
    setExpensesDataObj(updatedExpensesDataObj);
    } 
  }

  function deleteExpense(tripName, expenseId) {
    let expenses = [...expensesDataObj[tripName]];
    _.remove(expenses, (expense) => Number(expense.expenseId) === Number(expenseId));
    console.log("expenses AFTER remove", expenses);
    
    const updatedExpenses = { ...expensesDataObj, [tripName]: expenses };
    console.log("updatedExpenses", updatedExpenses);
    
    setExpensesDataObj(updatedExpenses);
  }

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/landing" element={<Landing />} />
          {/* <Route path="/:tripName" element={<NavigationBar /> }> */}
          <Route path="/:tripName/expenses" element={<ExpensePage expensesData={expensesDataObj} tripsDataArray={tripsDataArray} getHighestId={getHighestId} highestId={highestId} /> }></Route>
          <Route path="/:tripName/expenses/:expenseId" element={<CreateExpenseForm onSubmit={handleExpenseFormSubmit} tripsDataArray={tripsDataArray} expensesData={expensesDataObj} highestId={highestId} deleteExpense={deleteExpense}/>} />
          <Route path="/:tripName/balances" element={<BalancesPage expensesData={expensesDataObj} tripsDataArray={tripsDataArray} highestId={highestId} />} /> {/* Added route for BalancesPage */}
          <Route path="/mytrips" element={<MyTrips tripsDataArray={tripsDataArray} />} />
          <Route path="/createtrip" element={<CreateTripForm onSubmit={handleTripFormSubmit} currencyNames={currencyNamesObj} />} />
          <Route path="/*" element={<Navigate to="/landing" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
