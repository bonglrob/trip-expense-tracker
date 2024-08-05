import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function AddExpenseButton(props) {
    const { tripName } = useParams();
    
    return (
        <div className="d-flex align-items-center justify-content-end mb-3">
            <Link className="d-flex btn btn-primary me-3 text-decoration-none" to={`/expenses/${tripName}/create`}>Add New Expense<span className="material-symbols-outlined ms-1">add</span></Link>
        </div>
    )
}