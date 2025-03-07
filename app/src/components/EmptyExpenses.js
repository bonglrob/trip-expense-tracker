import { useParams } from "react-router-dom"
import AddExpenseButton from "./AddExpenseButton"
import NavigationBar from "./NavigationBar"

export default function EmptyExpenses({ highestId }) {
    const { tripName } = useParams();

    return (
        <div className="container mt-4">
            <h1 className="color-primary">{tripName}</h1>
            <div className="row">
                <NavigationBar />
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">No Expenses Yet</h2>
                            <p className="card-text">Get started by adding your first expense!</p>

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