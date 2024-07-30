import AddExpenseButton from "./AddExpenseButton.js";
import EmptyExpenses from "./EmptyExpenses.js";
import ExpensesList from "./ExpensesList.js";
import SearchBar from "./SearchBar.js"
import { Outlet } from "react-router-dom";
import Select from 'react-select';

export default function Expenses({ expensesData }) {
    // no expenses user state
    let expenseList = <EmptyExpenses />;

    if (expensesData.length > 1) {
        expenseList = (
            <div className="container mt-4">
            <h1 className="color-primary">Korea</h1>

            <div className="d-flex mb-1 align-items-center">

                <Outlet />
                
                {/* <!-- applied filters --> */}
                {/* <div className="d-flex flex-wrap gap-1 fit-content">
                    <div className="color-filter-active d-flex align-items-center">
                        <span className="badge color-filter-secondary-on">7-12-24 to 7-18-24</span>
                        <span aria-label="remove filter" className="material-symbols-outlined size-12 me-2">close</span>
                    </div>
                    <div className="color-filter-active d-flex align-items-center">
                        <span className="badge color-filter-secondary-on">Kara</span>
                        <span className="material-symbols-outlined size-12 me-2">close</span>
                    </div>
                    <div className="color-filter-active d-flex align-items-center">
                        <span className="badge color-filter-secondary-on">Food</span>
                        <span className="material-symbols-outlined size-12 me-2">close</span>
                    </div>
                </div> */}
            </div>

            <SearchBar />
            
            <AddExpenseButton />

            <ExpensesList expensesData={expensesData}/>

            </div>
        )
    }
    return expenseList;
}