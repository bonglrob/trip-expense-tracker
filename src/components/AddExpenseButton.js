import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import _ from "lodash";

export default function AddExpenseButton({ highestId }) {
    const { tripName } = useParams();

    return (
        <div className="d-flex align-items-center justify-content-end mb-3">
            <Link className="d-flex btn btn-primary me-2 text-decoration-none" to={`/${tripName}/expenses/${highestId + 1}`}>Add New Expense<span className="material-symbols-outlined ms-1">add</span></Link>
        </div>
    )
}