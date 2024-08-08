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
        {/* Display the trip name here only */}
        <div className="row">
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
