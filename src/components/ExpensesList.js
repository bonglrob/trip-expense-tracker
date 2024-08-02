export default function ExpensesList({ expensesData }) {
    let expenseCardArray = expensesData.map((expense) => {
        const transformed = (
            <ExpenseCard expense={expense}/>
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


    const {expenseId, expenseName, paidForNames, paidByName, cost, date} = expense;

    const paidByNameString = paidByName.value;

    let paidForNameString = paidForNames;
    if (paidForNames.length > 1) {
        paidForNameString = paidForNames.join(", ");
    }

    return (
        <div key={expenseId} className="col-12">
            <div className="card mb-2">
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
            </div>
        </div>
    )
}