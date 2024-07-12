import { Routes, Route } from 'react-router-dom';
import EmptyExpenses from './components/EmptyExpenses.js';

export default function App() {
  return (
    <div>
      {/* <Header> goes here */}
      <main>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/emptyexpenses" element={<EmptyExpenses />} />
        </Routes>
      </main>
      {/* <Footer> goes here */}
    </div>
  );
}