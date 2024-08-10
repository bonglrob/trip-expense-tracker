import { useParams, Link } from "react-router-dom";
import fx from "money"; // import money.js

export default function ExpensesList({ expensesData, currencyData }) {
    const { tripName } = useParams();

    // Configure money.js with currency rates
    fx.base = currencyData.main.value;
    fx.rates = currencyData.rates;

    // Map expenses data to ExpenseCard components
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

    const altCost = altCurrency ? fx(cost).from(mainCurrency).to(altCurrency).toFixed(2) : null;

    // Function to format money with commas
    function formatMoney(amount) {
        return new Intl.NumberFormat('en-US', {
            style: 'decimal',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(amount);
    }

    return (
        <div key={expenseId} className="col-12">
            <Link to={`/${tripName}/expenses/${expenseId}`} className="card mb-2">
                <div className="card-body d-flex justify-content-between">
                    <div>
                        <h2 className="card-title">{expenseName}</h2>
                        <p className="card-text">
                            <span className="name-emphasis">{paidByNameString}</span> paid for{" "}
                            <span className="name-emphasis">{paidForNameString}</span>
                        </p>
                    </div>
                    <div className="text-end align-self-end">
                        <h2 className="card-dollar-amt">${formatMoney(cost)} {mainCurrency}</h2>
                        {altCurrency && <p className="card-currency-amt">({formatMoney(altCost)} {altCurrency})</p>}
                        <p className="card-date">{date}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}
