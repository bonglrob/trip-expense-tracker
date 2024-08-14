import { useEffect, useState } from "react";

export default function SearchBar() {
    const [expenseSearch, setExpenseSearch] = useState(null);
    
    function handleSearchChange(event) {
        const value = event.target.value;
        setExpenseSearch(value);
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
                onChange={handleSearchChange}/>
        </div>
    </form>
    )
}
