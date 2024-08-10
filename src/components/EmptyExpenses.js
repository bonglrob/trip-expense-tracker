import AddExpenseButton from "./AddExpenseButton"
import NavigationBar from "./NavigationBar"

export default function EmptyExpenses({ highestId }) {
    return (
        <div class="container mt-4">
            <h1 class="color-primary">Korea</h1>
            <div class="row">
                <NavigationBar />
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                            <h2 class="card-title">No Expenses Yet</h2>
                            <p class="card-text">Get started by adding your first expense!</p>

                            <div className="d-flex">
                                <AddExpenseButton highestId={highestId}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}