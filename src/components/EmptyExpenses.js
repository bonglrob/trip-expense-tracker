// import Navbar from "component" jaja

export default function EmptyExpenses() {
    return (
    <div class="container mt-4">
        <h1 class="color-primary">Korea</h1>
        <div class="row">

{/* <Navbar /> */}
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h2 class="card-title">No Expenses Yet</h2>
                        <p class="card-text">Get started by adding your first expense!</p>
                        <a href="#" aria-label="Create Expense" class="btn btn-primary d-flex align-items-center"><icon class="material-symbols-outlined me-2">checkbook</icon>Create Expense</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}