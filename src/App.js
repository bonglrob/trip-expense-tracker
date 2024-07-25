import { Routes, Route } from 'react-router-dom';
import EmptyExpenses from './components/EmptyExpenses';
import EmptyBalances from './components/EmptyBalances';
import FilledBalances from './components/FilledBalances';
import Stats from './components/Stats';
import CreateExpense from './components/CreateExpense.js';
import FilterExpenses from './components/FilterExpenses.js';
import Expenses from './components/Expenses.js';
import MyTrips from './components/MyTrips.js';
import CreateTrip from './components/CreateTrip.js';

export default function App(props) {
  const expensesData = props.expenses;

  return (
    <div>
      {/* <Header> goes here */}
      <main>
        <Routes>
          <Route path="/emptybalances" element={<EmptyBalances />} />
          <Route path="/filledbalances" element={<FilledBalances />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/createexpense" element={<CreateExpense />} />
          <Route path="/expenses" element={<Expenses expensesData={expensesData}/>} />
          <Route path="/filterexpenses" element={<FilterExpenses />} />
          <Route path="/mytrips" element={<MyTrips />} />
          <Route path="/createtrip" element={<CreateTrip />} />
        </Routes>
      </main>
      {/* <Footer> goes here */}
    </div>
  );
}