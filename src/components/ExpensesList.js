import { useParams, Link } from "react-router-dom";
import fx from "money"; // import money.js

export default function ExpensesList({ expensesData, currencyData }) {
    const { tripName } = useParams();

    // Configure money.js with currency rates
    fx.base = currencyData.main.value;
    fx.rates = currencyData.rates;

    console.log("Configured base currency:", fx.base);
    console.log("Currency rates:", fx.rates);

    let expenseCardArray = expensesData[tripName].map((expense) => {
        const transformed = (
            <ExpenseCard key={expense.expenseId} expense={expense} currencyData={currencyData} />
        );
        return transformed;
    });

    return (
        <div className="row">
            {expenseCardArray}
        </div>
    );
}

function ExpenseCard({ expense, currencyData }) {
    const { tripName } = useParams();

    const { expenseId, expenseName, paidForNames, paidByName, cost, date } = expense;

    const paidByNameString = paidByName.value;

    let paidForNameString = paidForNames;
    if (paidForNames.length > 1) {
        paidForNameString = paidForNames.join(", ");
    }

    const mainCurrency = currencyData.main.value;
    const altCurrency = currencyData.alt.length > 0 ? currencyData.alt[0].value : null;

    // Log the cost and currencies
    console.log("Original cost:", cost);
    console.log("Main currency:", mainCurrency);
    console.log("Alternative currency:", altCurrency);

    const altCost = altCurrency ? fx(cost).from(mainCurrency).to(altCurrency).toFixed(2) : null;

    // Log the converted cost
    console.log("Converted cost:", altCost);

    return (
        <div key={expenseId} className="col-12">
            <Link to={`/expenses/${tripName}/${expenseId}`} className="card mb-2">
                <div className="card-body d-flex justify-content-between">
                    <div>
                        <h2 className="card-title">{expenseName}</h2>
                        <p className="card-text">
                            <span className="name-emphasis">{paidByNameString}</span> paid for{" "}
                            <span className="name-emphasis">{paidForNameString}</span>
                        </p>
                    </div>
                    <div className="text-end align-self-end">
                        <h2 className="card-dollar-amt">${cost} {mainCurrency}</h2>
                        {altCurrency && <p className="card-currency-amt">({altCost} {altCurrency})</p>}
                        <p className="card-date">{date}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}
