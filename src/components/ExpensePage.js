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

    // Find trip data
    const tripData = _.find(tripsDataArray, { tripName: tripName });

    // Function to convert amount to main currency
    const convertToMainCurrency = (amount, currency, rates, mainCurrency) => {
        if (currency === mainCurrency) return amount;
        const rate = rates[currency];
        if (rate) return amount / rate;
        console.error(`Conversion rate for ${currency} not found`);
        return amount;
    };

    // Convert expenses data to main currency
    const convertExpensesData = () => {
        if (!tripData) return {};
    
        const mainCurrency = tripData.currency.main.value;
        const currencyRates = tripData.currency.rates;
    
        return _.mapValues(expensesData, expenses => 
            expenses.map(expense => {
                // Check if currency field exists
                const expenseCurrency = expense.currency && expense.currency.value;
                if (!expenseCurrency) {
                    console.error(`Expense currency not found for expenseId: ${expense.expenseId}`);
                    return expense; // Return unmodified expense if currency is missing
                }
    
                return {
                    ...expense,
                    cost: convertToMainCurrency(expense.cost, expenseCurrency, currencyRates, mainCurrency),
                    costPerName: expense.costPerName.map(costEntry => {
                        const [name, cost] = Object.entries(costEntry)[0];
                        return { [name]: convertToMainCurrency(cost, expenseCurrency, currencyRates, mainCurrency) };
                    })
                };
            })
        );
    };
    

    // Update expenses data with converted costs
    const convertedExpensesData = convertExpensesData();

    useEffect(() => {
        getHighestId(tripName);
    }, [getHighestId, tripName]);

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
        convertedExpensesData[tripName].length === 0 ? (
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
                    <FilterExpensesForm tripsDataArray={tripsDataArray} applyFilterCallback={applyFilter} />
                </div>

                <SearchBar  applySearchFilterCallback={applySearchFilter} />

                <ExpensesList expensesData={convertedExpensesData} currencyData={tripData.currency} tripDisplayedData={displayedData}/>

                <div className="col-md-12">
                    <p className="text-end">showing {expensesData[tripName].length} of {expensesData[tripName].length} results</p>
                </div>

            </div>
        )
    );
}
