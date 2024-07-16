import { Routes, Route } from 'react-router-dom';
import EmptyExpenses from './components/EmptyExpenses.js';
import CreateExpense from './components/CreateExpense.js';
import FilterExpenses from './components/FilterExpenses.js';

export default function App() {
  return (
    <div>
      {/* <Header> goes here */}
      <main>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/emptyexpenses" element={<EmptyExpenses />} />
          <Route path="/createexpenses" element={<CreateExpense />} />
          <Route path="/filterexpenses" element={<FilterExpenses />} />
        </Routes>
      </main>
      {/* <Footer> goes here */}
    </div>
  );
}