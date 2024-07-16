export default function FilledExpenses() {
    return (
        <div class="container mt-4">
            <h1 class="color-primary">Korea</h1>
            
            {/* <!-- <NavBar /> --> */}

            <div class="d-flex mb-1 align-items-center">
                {/* <!-- filter button --> */}
                <div>
                    <a href="expenses-filter.html"><span class="btn"><span class="material-symbols-outlined">tune</span></span></a>
                </div>

                {/* <!-- applied filters --> */}
                <div class="d-flex flex-wrap gap-1 fit-content">
                    <div class="color-filter-active d-flex align-items-center">
                        <span class="badge color-filter-secondary-on">7-12-24 to 7-18-24</span>
                        <span aria-label="remove filter" class="material-symbols-outlined size-12 me-2">close</span>
                    </div>
                    <div class="color-filter-active d-flex align-items-center">
                        <span class="badge color-filter-secondary-on">Kara</span>
                        <span class="material-symbols-outlined size-12 me-2">close</span>
                    </div>
                    <div class="color-filter-active d-flex align-items-center">
                        <span class="badge color-filter-secondary-on">Food</span>
                        <span class="material-symbols-outlined size-12 me-2">close</span>
                    </div>
                </div>
            </div>

            {/* <!-- Search Bar --> */}
            <form role="search">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><span class="material-symbols-outlined">search</span></span>
                    </div>
                    <input class="form-control" type="search" placeholder="Search for expenses" aria-label="Search"/>
                </div>
            </form>

            {/* <!-- Create new expense --> */}
            <div class="d-flex align-items-center justify-content-end mb-3">
                <a class="text-decoration-none" href="create-expense.html"><button class="d-flex btn btn-primary me-3" type="menu">Add New Expense<span class="material-symbols-outlined ms-1">add</span></button></a>
            </div>

            {/* <!-- expenses list view --> */}
            <div class="row">
                <div class="col">
                    <div class="card mb-2">
                        <div class="card-body d-flex justify-content-between">
                            <div>
                                <h2 class="card-title">Jajangmyeon Restaurant</h2>
                                <p class="card-text"><span class="name-emphasis">Kara</span> paid for <span class="name-emphasis">Everyone</span></p>
                            </div>
                            <div class="text-end align-self-end">
                                <h2 class="card-dollar-amt">$40.09</h2>
                                <p class="card-currency-amt">(₩55,423)</p>
                                <p class="card-date">Jul 18, 2024</p>
                            </div>
                        </div>
                    </div>
                <div class="col">
                    <div class="card mb-2">
                        <div class="card-body d-flex justify-content-between">
                            <div>
                                <h2 class="card-title">Ttbeokki</h2>
                                <p class="card-text"><span class="name-emphasis">Kara</span> paid for <span class="name-emphasis">Michelle</span></p>
                            </div>
                            <div class="text-end align-self-end">
                                <h2 class="card-dollar-amt">$5.08</h2>
                                <p class="card-currency-amt">(₩7,000)</p>
                                <p class="card-date">Jul 17, 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-2">
                        <div class="card-body d-flex justify-content-between">
                            <div>
                                <h2 class="card-title">Mangwon Market</h2>
                                <p class="card-text"><span class="name-emphasis">Kara</span> paid for <span class="name-emphasis">Kevin, Michelle</span></p>
                            </div>
                            <div class="text-end align-self-end">
                                <h2 class="card-dollar-amt">$13.58</h2>
                                <p class="card-currency-amt">(₩18,700)</p>
                                <p class="card-date">Jul 15, 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-2">
                        <div class="card-body d-flex justify-content-between">
                            <div>
                                <h2 class="card-title">Airbnb grocery haul</h2>
                                <p class="card-text"><span class="name-emphasis">Kara</span> paid for <span class="name-emphasis">Everyone</span></p>
                            </div>
                            <div class="text-end align-self-end">
                                <h2 class="card-dollar-amt">$16.12</h2>
                                <p class="card-currency-amt">(₩22,200)</p>
                                <p class="card-date">Jul 12, 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div> // Is this div container closed properly?
        // {/* <Footer />  */}
    )
}