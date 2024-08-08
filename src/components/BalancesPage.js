import React from 'react';
import { useParams } from 'react-router-dom';
import _ from 'lodash';
import EmptyBalances from './EmptyBalances';
import FilledBalances from './FilledBalances';

export default function BalancesPage({ expensesData, tripsDataArray }) {
  const { tripName } = useParams(); // Get tripName from the URL

  // Find trip data by tripName
  const tripData = _.find(tripsDataArray, { tripName });

  if (!tripData) {
    return <h2>{tripName} trip has not yet been created!</h2>; // If trip does not exist
  }

  // Determine if there are any expenses for this trip
  const tripExpenses = expensesData[tripName];
  const hasExpenses = tripExpenses && tripExpenses.length > 0;

  return (
    <main className="bg-light">
      <div className="container mt-4">
        <h1 className="color-container-primary-on">{tripName}</h1>
        <div className="row">
          <div className="main-nav container mb-3">
            <nav className="card bg-light">
              <div className="container-fluid">
                <ul className="nav">
                  <li className="nav-item">
                    <a className="nav-link" href="index.html">
                      Expenses
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active btn" aria-current="page" href="#">
                      Balances
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="stats.html">
                      Stats
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">Settings</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          {hasExpenses ? (
            <FilledBalances tripExpenses={tripExpenses} />
          ) : (
            <EmptyBalances />
          )}
        </div>
      </div>
    </main>
  );
}
