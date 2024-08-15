import { useEffect, useState } from "react";
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

    // State Data
    const [paidForFilter, setPaidForFilter] = useState(null);
    const [paidByFilter, setPaidByFilter] = useState(null);
    const [dateFilter, setDateFilter] = useState('');
    const [categoryFilter, setCategoryFilter] = useState(null);
    const [searchFilter, setSearchFilter] = useState('');
    console.log('DEBUG exp page:', paidForFilter, paidByFilter, dateFilter, categoryFilter, searchFilter);

    let tripData = _.find(tripsDataArray, { tripName: tripName }); // find tripName in data  

    useEffect(() => {
        getHighestId(tripName);
    })

    if (!tripData) return <h2>{tripName} trip has not yet been created!</h2>; // if unspecified

    const tripExpenseData = expensesData[tripName];

    function applyFilter(paidForNames, paidByName, date, category) {
        updateFilter(paidForNames, paidByName, date, category);
    }
    
    function updateFilter(paidForNames, paidByName, date, category) {
        setPaidForFilter(paidForNames);
        setPaidByFilter(paidByName);
        setDateFilter(date);
        setCategoryFilter(category);
        
    }
    
    function applySearchFilter(search) {
        updateSearchFilter(search);
    }

    function updateSearchFilter(search) {
        setSearchFilter(search);
    }

    // filter displayed data
    // 1) by paidFor
    const dataFilteredByPaidFor = tripExpenseData.filter((expenseObj) => {
        if (paidForFilter === null|| paidForFilter.length === 0 ) {
            return true;
        } else {
            // for each paid name in paid for filter check if is in the displayed data paidfornames and true if so
            for (const name of paidForFilter) {
                if (expenseObj.paidForNames.includes(name.value)) {
                    return true;
                } 
            }
            return false;
        }
    });

    // 2) by paidBy
    const dataFilteredByPaidBy = dataFilteredByPaidFor.filter((expenseObj) => {
        if (paidByFilter === null) {
            return true;
        } else {
            return expenseObj.paidByName.value === paidByFilter.value;
        }
    });

    // 3) by date
    const dataFilteredByDate = dataFilteredByPaidBy.filter((expenseObj) => {
        if (dateFilter === '') {
            return true;
        } else {
            console.log(dateFilter);
            console.log(expenseObj.date);
            return expenseObj.date === dateFilter;
        }
    });

    // 4) by category
    const dataFilteredByCategory = dataFilteredByDate.filter((expenseObj) => {
        if (categoryFilter === null) {
            return true;
        } else {
            return expenseObj.expenseCategory.value === categoryFilter.value;
        }
    });

    // 4) by Search
    const dataFilteredBySearch = dataFilteredByCategory.filter((expenseObj) => {
        if (searchFilter === '') {
            return true;
        } else {
            const expenseNameToLower = expenseObj.expenseName.toLowerCase();
            const searchFilterToLower = searchFilter.toLowerCase();
            return expenseNameToLower.includes(searchFilterToLower);
        }
    });
    
    const displayedData = dataFilteredBySearch;
    console.log('DISPLAYED:', displayedData);

    return (
        // if no expenses exist for a trip
        expensesData[tripName].length === 0 ? (
            <EmptyExpenses highestId={highestId} /> 
        ) : (
            <div className="container mt-4">
                <h1 className="color-primary">{tripName}</h1>
                <NavigationBar />

                <AddExpenseButton highestId={highestId} />
                <div className="d-flex mb-1 align-items-center">
                    <FilterExpensesForm tripsDataArray={tripsDataArray} applyFilterCallback={applyFilter} />
                </div>

                <SearchBar  applySearchFilterCallback={applySearchFilter} />
                <ExpensesList expensesData={expensesData} currencyData={tripData.currency} tripDisplayedData={displayedData}/>
            </div>
        )
    );
}
