import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import _ from "lodash";

import NavigationBar from "./NavigationBar";
import EmptyExpenses from "./EmptyExpenses";

export default function BalancesPage({ expensesData, tripsDataArray, highestId }) {
    const { tripName } = useParams(); // e.g. returns "Korea"
    const [balances, setBalances] = useState({});

    // Find trip data
    const tripData = _.find(tripsDataArray, { tripName: tripName });

    useEffect(() => {
        if (tripData) {
            calculateBalances();
        }
    }, [tripData]);

    if (!tripData) return <h2>{tripName} trip has not yet been created!</h2>; // if unspecified

    // Function to convert amount to main currency
    const convertToMainCurrency = (amount, currency, rates, mainCurrency) => {
        if (currency === mainCurrency) return amount;
        const rate = rates[currency];
        if (rate) return amount / rate;
        console.error(`Conversion rate for ${currency} not found`);
        return amount;
    };

    const calculateBalances = () => {
        const balances = {};

        // Initialize balances for each person involved in the trip
        tripData.members.forEach(member => {
            balances[member] = 0;
        });

        const mainCurrency = tripData.currency.main.value;
        const currencyRates = tripData.currency.rates;

        // Iterate over each expense in the selected trip
        expensesData[tripName].forEach(expense => {
            const expenseCurrency = expense.currency && expense.currency.value;
            const totalCost = convertToMainCurrency(expense.cost, expenseCurrency, currencyRates, mainCurrency);
            const paidBy = expense.paidByName.value;
            const numOfPeople = expense.paidForNames.length;
            const costPerPerson = totalCost / numOfPeople;

            // Update balances
            expense.paidForNames.forEach(name => {
                if (name !== paidBy) {
                    // The person owes the payer
                    balances[name] -= costPerPerson;
                    balances[paidBy] += costPerPerson;
                }
            });
        });

        setBalances(balances);
    };

    // Separate balances into positive (owed to) and negative (owes)
    const positiveBalances = [];
    const negativeBalances = [];
    
    for (let person in balances) {
        if (balances[person] > 0) {
            positiveBalances.push({ person, amount: balances[person] });
        } else if (balances[person] < 0) {
            negativeBalances.push({ person, amount: balances[person] });
        }
    }

    // Get the main currency symbol
    const mainCurrencySymbol = tripData.currency.main.value;

    return (
        expensesData[tripName].length === 0 ? (
            <EmptyExpenses highestId={highestId}/>
        ) : (
        <>
            <div className="container mt-4">
                <h1 className="color-primary">{tripName}</h1>
                <div className="row">
                    <NavigationBar />

                    <div className="col-lg-6 mb-4">
                        <div className="card shadow-sm border-0">
                            <div className="card-body">
                                <h1 className="card-title">Overall Debt</h1>
                                <p className="card-text">Here is the overall debt of each person:</p>
                                <ul className="list-group">
                                    {positiveBalances.map(({ person, amount }) => (
                                        <li key={person} className="list-group-item d-flex justify-content-between align-items-center">
                                            {person}
                                            <span className="badge bg-success rounded-pill">+ {mainCurrencySymbol} {amount.toFixed(2)}</span>
                                        </li>
                                    ))}
                                    {negativeBalances.map(({ person, amount }) => (
                                        <li key={person} className="list-group-item d-flex justify-content-between align-items-center">
                                            {person}
                                            <span className="badge bg-danger rounded-pill">- {mainCurrencySymbol} {Math.abs(amount).toFixed(2)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card shadow-sm border-0">
                            <div className="card-body">
                                <h1 className="card-title">Balances</h1>
                                <p className="card-text">Here are the current balances:</p>
                                <ul className="list-group">
                                    {negativeBalances.map(({ person: debtor, amount: debtAmount }) => (
                                        positiveBalances.map(({ person: creditor, amount: creditAmount }) => (
                                            <li key={debtor + creditor} className="list-group-item">
                                                {debtor} <span className="icon-center material-symbols-outlined">arrow_forward</span> owes {creditor}: {mainCurrencySymbol} {(Math.min(Math.abs(debtAmount), creditAmount)).toFixed(2)}
                                            </li>
                                        ))
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ));
}
