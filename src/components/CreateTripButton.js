import { Link } from "react-router-dom"; //

export function CreateTripButton(props) {
    return (
        <div className="d-flex align-items-center justify-content-end mb-3">
            <Link className="d-flex btn btn-primary me-3 text-decoration-none" to="/createtrip">Create Trip<span className="material-symbols-outlined ms-1">add</span></Link>
        </div>
    )
}