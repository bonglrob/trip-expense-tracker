import { useEffect } from "react";
import AddExpenseButton from "./AddExpenseButton.js";
import EmptyExpenses from "./EmptyExpenses.js";
import ExpensesList from "./ExpensesList.js";
import SearchBar from "./SearchBar.js";
import { useParams } from "react-router-dom";
import _ from "lodash";
import NavigationBar from "./NavigationBar.js";
import FilterExpensesForm from "./FiltersExpensesForm.js";

export default function ExpensePage({ expensesData, tripsDataArray, getHighestId, highestId }) {

    const { tripName } = useParams(); // e.g. returns "Korea"

    let tripData = _.find(tripsDataArray, { tripName: tripName }); // find tripName in data    

    useEffect(() => {
        getHighestId(tripName);
    })

    if (!tripData) return <h2>{tripName} trip has not yet been created!</h2>; // if unspecified

    return (
        // if no expenses exist for a trip
        expensesData[tripName].length === 0 ? (
            <EmptyExpenses highestId={highestId} /> 
        ) : (
            <div className="container mt-4">
                <div className="row mb-1">
                    <div className="col-md-4">
                        <h1 className="color-primary">{tripName}</h1>
                    </div>
                    <div className="col-md-4 mt-auto ms-auto mb-2">
                        <AddExpenseButton highestId={highestId} />
                    </div>
                </div>
                <NavigationBar />

                <div className="d-flex mb-1 align-items-center">
                    <FilterExpensesForm tripsDataArray={tripsDataArray}/>
                </div>

                <SearchBar />

                <ExpensesList expensesData={expensesData} currencyData={tripData.currency} />

                <div className="col-md-12">
                    <p className="text-end">showing {expensesData[tripName].length} of {expensesData[tripName].length} results</p>
                </div>

            </div>
        )
    );
}
