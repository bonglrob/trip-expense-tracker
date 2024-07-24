import { Routes, Route } from 'react-router-dom';
import EmptyExpenses from './components/EmptyExpenses';
import EmptyBalances from './components/EmptyBalances';
import FilledBalances from './components/FilledBalances';
import Stats from './components/Stats';
import CreateExpense from './components/CreateExpense.js';
import FilterExpenses from './components/FilterExpenses.js';
import FilledExpenses from './components/FilledExpenses.js';

export default function App(props) {
  const expensesData = props.expenses;

  return (
    <div>
      {/* <Header> goes here */}
      <main>
        <Routes>
          <Route path="/emptyexpenses" element={<EmptyExpenses />} />
          <Route path="/emptybalances" element={<EmptyBalances />} />
          <Route path="/filledbalances" element={<FilledBalances />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/createexpense" element={<CreateExpense />} />
          <Route path="/filledexpenses" element={<FilledExpenses expensesData={expensesData}/>} />
          <Route path="/filterexpenses" element={<FilterExpenses />} />
        </Routes>
      </main>
      {/* <Footer> goes here */}
    </div>
  );
}