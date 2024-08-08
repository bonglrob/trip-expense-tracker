import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import EmptyBalances from './components/EmptyBalances';
import FilledBalances from './components/FilledBalances';
import Stats from './components/Stats';
import { CreateExpenseForm } from './components/CreateExpenseForm.js';
import FilterExpensesForm from './components/FiltersExpensesForm.js';
import ExpensePage from './components/ExpensePage.js';
import MyTrips from './components/MyTrips.js';
import { CreateTripForm } from './components/CreateTripForm.js';
import { Navigate } from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Landing from './components/Landing.js';
import BalancesPage from './components/BalancesPage.js'; // Import BalancesPage

export default function App({ expenses, currencyNames, tripsData }) {
  const expensesData = expenses;

  // Fetch Frankfurther API: https://github.com/hakanensari/frankfurter
  const CURRENCY_API_URL = 'https://api.frankfurter.app';

  // get currency rates on day of trip based on main currency against alt currencies (e.g. currencyRates.json)
  function fetchCurrencyRates(tripFormData) {
    let { startDate, currency } = tripFormData;
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    if (startDate >= currentDate) startDate = "latest";

    const mainCurrencyParam = currency.main.value;
    const altCurrencyArray = currency.alt.value;

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

  // useEffect(() => {
  //   fetchCurrencyNames();
  // }, []);

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
  const [currencyNamesObj, setCurrencyNamesObj] = useState({...currencyNames}); // testing with currencyNames.json

  /// An array of trip objects
  const [tripsDataArray, setTripsDataArray] = useState([...tripsData]); // testing with trips.json
  console.log(tripsDataArray);

  function handleTripFormSubmit(tripFormData) {
    const updatedTripsDataArray = [...tripsDataArray, tripFormData];
    setTripsDataArray(updatedTripsDataArray);

    // when user selects alt currencies
    if (tripFormData.currency.alt.length > 0) {
      // fetchCurrencyRates(tripFormData);
    }
  };

  function handleExpenseFormSubmit(expenseFormData) {
    // 
  }

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/emptybalances" element={<EmptyBalances />} />
          <Route path="/filledbalances" element={<FilledBalances />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/expenses/:tripName" element={<ExpensePage expensesData={expensesData} tripsDataArray={tripsDataArray} />}>
            {/* {<Route index element={<FilterExpensesForm />}></Route>} */}
            {/* <Route path="/expenses/:expenseId" element={<CreateExpenseForm mainCurrency={mainCurrency} altCurrency={altCurrency} />} /> */}
          </Route>
          <Route path="/expenses/:tripName/:expenseId" element={<CreateExpenseForm onSubmit={handleExpenseFormSubmit} tripsDataArray={tripsDataArray} />} />
          <Route path="/mytrips" element={<MyTrips tripsDataArray={tripsDataArray} />} />
          <Route path="/createtrip" element={<CreateTripForm onSubmit={handleTripFormSubmit} currencyNames={currencyNamesObj} />} />
          <Route path="/balances/:tripName" element={<BalancesPage expensesData={expensesData} tripsDataArray={tripsDataArray} />} /> {/* Added route for BalancesPage */}
          <Route path="/*" element={<Navigate to="/mytrips" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
