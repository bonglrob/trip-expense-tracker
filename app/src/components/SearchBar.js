import { useEffect, useState } from "react";

export default function SearchBar({ applySearchFilterCallback }) {
    const [expenseSearch, setExpenseSearch] = useState('');
    applySearchFilterCallback(expenseSearch);
    
    function handleSearchChange(event) {
        const value = event.target.value;
        setExpenseSearch(value);
        applySearchFilterCallback(expenseSearch);
    }

    return (
        <form role="search">
        <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text"><span className="material-symbols-outlined">search</span></span>
            </div>
            <input 
                className="form-control" 
                type="search" 
                placeholder="Search for expenses" 
                aria-label="Search"
                value={expenseSearch}
                onChange={handleSearchChange} />
        </div>
    </form>
    )
}
