import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import _ from "lodash";

export default function BalancesPage({ expensesData, tripsDataArray }) {
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

    const calculateBalances = () => {
        const balances = {};

        // Initialize balances for each person involved in the trip
        tripData.members.forEach(member => {
            balances[member] = 0;
        });

        // Iterate over each expense in the selected trip
        expensesData[tripName].forEach(expense => {
            const totalCost = expense.cost;
            const paidBy = expense.paidByName.value;
            const splitMethod = expense.splitMethod.value;
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

    return (
        <div className="bg-light">
            <main>
                <div className="container mt-4">
                    <h1 className="color-container-primary-on">{tripName}</h1>
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
                                                <span className="badge bg-success rounded-pill">+ ${amount.toFixed(2)}</span>
                                            </li>
                                        ))}
                                        {negativeBalances.map(({ person, amount }) => (
                                            <li key={person} className="list-group-item d-flex justify-content-between align-items-center">
                                                {person}
                                                <span className="badge bg-danger rounded-pill">- ${Math.abs(amount).toFixed(2)}</span>
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
                                                    {debtor} <span className="icon-center material-symbols-outlined">arrow_forward</span> owes {creditor}: ${(Math.min(Math.abs(debtAmount), creditAmount)).toFixed(2)}
                                                </li>
                                            ))
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="mt-5">
                <div className="d-flex flex-column align-items-center">
                    <div className="footer-links">
                        <p>
                            <a href="#" aria-label="Home" className="px-1">
                                Home
                            </a>
                            <a href="#" aria-label="About" className="px-1">
                                About
                            </a>
                            <a href="#" aria-label="FAQ" className="px-1">
                                Frequently Asked Questions
                            </a>
                        </p>
                    </div>
                    <p>
                        TripSplit{' '}
                        <a href="https://github.com/info340-su24/travel-expenses-B7">
                            <img className="github" src="image/github-icon.svg" alt="github icon" />
                        </a>
                    </p>
                    <p className="text-center">
                        Created by Robert Bonglamphone, Emma Esteban, and Nick Chiu
                        <br />
                        Part of University of Washington course INFO 340
                    </p>
                </div>
            </footer>
        </div>
    );
}
