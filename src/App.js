import { Routes, Route } from 'react-router-dom';
import EmptyExpenses from './components/EmptyExpenses';
import EmptyBalances from './components/EmptyBalances';
import FilledBalances from './components/FilledBalances';
import Stats from './components/Stats';

export default function App() {
  return (
    <div>
      {/* <Header> goes here */}
      <main>
        <Routes>
          <Route path="/emptyexpenses" element={<EmptyExpenses />} />
          <Route path="/emptybalances" element={<EmptyBalances />} />
          <Route path="/filledbalances" element={<FilledBalances />} />
          <Route path="/stats" element={<Stats />} />
          {/* Add more routes as needed */}
        </Routes>
      </main>
      {/* <Footer> goes here */}
    </div>
  );
}