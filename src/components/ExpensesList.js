import { useParams, Link } from "react-router-dom";

export default function ExpensesList({ expensesData }) {
    const { tripName } = useParams();

    let expenseCardArray = expensesData[tripName].map((expense) => {
        const transformed = (
            <ExpenseCard key={expense.expenseId} expense={expense}/>
        );
        return transformed;
    })
    return (
        <div className="row">
            {expenseCardArray}
        </div>
    )
}

function ExpenseCard({ expense }) {
    const { tripName } = useParams();

    const {expenseId, expenseName, paidForNames, paidByName, cost, date} = expense;

    const paidByNameString = paidByName.value;

    let paidForNameString = paidForNames;
    if (paidForNames.length > 1) {
        paidForNameString = paidForNames.join(", ");
    }

    return (
        <div key={expenseId} className="col-12">
            <Link to={`/expenses/${tripName}/${expenseId}`} className="card mb-2">
                <div className="card-body d-flex justify-content-between">
                    <div>
                        <h2 className="card-title">{expenseName}</h2>
                        <p className="card-text"><span className="name-emphasis">{paidByNameString}</span> paid for <span className="name-emphasis">{paidByNameString}</span></p>
                    </div>
                    <div className="text-end align-self-end">
                        <h2 className="card-dollar-amt">${cost}</h2>
                        <p className="card-currency-amt">(₩ Not Sure)</p>
                        <p className="card-date">{date}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}