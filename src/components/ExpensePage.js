import AddExpenseButton from "./AddExpenseButton.js";
import EmptyExpenses from "./EmptyExpenses.js";
import ExpensesList from "./ExpensesList.js";
import SearchBar from "./SearchBar.js";
import { Outlet, useParams } from "react-router-dom";
import _ from "lodash";
import NavigationBar from "./NavigationBar.js";

export default function ExpensePage({ expensesData, tripsDataArray }) {
    const { tripName } = useParams(); // e.g. returns "Korea"

    let tripData = _.find(tripsDataArray, { tripName: tripName }); // find tripName in data

    if (!tripData) return <h2>{tripName} trip has not yet been created!</h2>; // if unspecified

    // no expenses user state
    let expenseList = <EmptyExpenses />;
    if (expensesData[tripName].length > 1) {
        expenseList = (
            <div className="container mt-4">
                <h1 className="color-primary">{tripsDataArray.tripName}</h1>
            <NavigationBar />

                <div className="d-flex mb-1 align-items-center">
                    <Outlet />
                </div>

                <SearchBar />
                <AddExpenseButton />
                <ExpensesList expensesData={expensesData} currencyData={tripData.currency} />
            </div>
        );
    }
    return expenseList;
}
