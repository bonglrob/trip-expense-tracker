import AddExpenseButton from "./AddExpenseButton";

export default function FilledExpenses({expensesData}) {
    console.log("filled", expensesData);

    return (
        <div className="container mt-4">
            <h1 className="color-primary">Korea</h1>
            
            {/* <!-- <NavBar /> --> */}

            {/* <div className="d-flex mb-1 align-items-center">
                <!-- filter button -->
                <div>
                    <a href="expenses-filter.html"><span className="btn"><span className="material-symbols-outlined">tune</span></span></a>
                </div>

                <!-- applied filters -->
                <div className="d-flex flex-wrap gap-1 fit-content">
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
                </div>
            </div> */}

            {/* <!-- Search Bar -->
            <form role="search">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><span className="material-symbols-outlined">search</span></span>
                    </div>
                    <input className="form-control" type="search" placeholder="Search for expenses" aria-label="Search"/>
                </div>
            </form> */}
            
            <AddExpenseButton />

            <ExpenseCard expensesData={expensesData[0]}/>
            {/* <ExpensesList /> */}

        </div>
        // {/* <Footer />  */}
    )
}

function ExpenseCard({expensesData}) {
    console.log("data", expensesData);
    const {expenseName, paidForName, paidByName, cost, altCurrencyCost, date} = expensesData;
    const paidByNameString = paidForName.join(", ");

    return (
        <div className="col">
            <div className="card mb-2">
                <div className="card-body d-flex justify-content-between">
                    <div>
                        <h2 className="card-title">{expenseName}</h2>
                        <p className="card-text"><span className="name-emphasis">{paidByName}</span> paid for <span className="name-emphasis">{paidByNameString}</span></p>
                    </div>
                    <div className="text-end align-self-end">
                        <h2 className="card-dollar-amt">${cost}</h2>
                        <p className="card-currency-amt">(₩{altCurrencyCost})</p>
                        <p className="card-date">{date}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ExpensesList() {
    return (
        <div className="row">
            <div className="col">
                <div className="card mb-2">
                    <div className="card-body d-flex justify-content-between">
                        <div>
                            <h2 className="card-title">Jajangmyeon Restaurant</h2>
                            <p className="card-text"><span className="name-emphasis">Kara</span> paid for <span className="name-emphasis">Everyone</span></p>
                        </div>
                        <div className="text-end align-self-end">
                            <h2 className="card-dollar-amt">$40.09</h2>
                            <p className="card-currency-amt">(₩55,423)</p>
                            <p className="card-date">Jul 18, 2024</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card mb-2">
                    <div className="card-body d-flex justify-content-between">
                        <div>
                            <h2 className="card-title">Ttbeokki</h2>
                            <p className="card-text"><span className="name-emphasis">Kara</span> paid for <span className="name-emphasis">Michelle</span></p>
                        </div>
                        <div className="text-end align-self-end">
                            <h2 className="card-dollar-amt">$5.08</h2>
                            <p className="card-currency-amt">(₩7,000)</p>
                            <p className="card-date">Jul 17, 2024</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card mb-2">
                    <div className="card-body d-flex justify-content-between">
                        <div>
                            <h2 className="card-title">Mangwon Market</h2>
                            <p className="card-text"><span className="name-emphasis">Kara</span> paid for <span className="name-emphasis">Kevin, Michelle</span></p>
                        </div>
                        <div className="text-end align-self-end">
                            <h2 className="card-dollar-amt">$13.58</h2>
                            <p className="card-currency-amt">(₩18,700)</p>
                            <p className="card-date">Jul 15, 2024</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card mb-2">
                    <div className="card-body d-flex justify-content-between">
                        <div>
                            <h2 className="card-title">Airbnb grocery haul</h2>
                            <p className="card-text"><span className="name-emphasis">Kara</span> paid for <span className="name-emphasis">Everyone</span></p>
                        </div>
                        <div className="text-end align-self-end">
                            <h2 className="card-dollar-amt">$16.12</h2>
                            <p className="card-currency-amt">(₩22,200)</p>
                            <p className="card-date">Jul 12, 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}