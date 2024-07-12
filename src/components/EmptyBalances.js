export default function EmptyBalances() {
    return (
      <div className="container mt-4">
        <h1 className="color-primary">Korea</h1>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">No Balances Yet</h2>
                <p className="card-text">Get started by adding your first expense!</p>
                <a href="#" aria-label="Create Expense" className="btn btn-primary d-flex align-items-center">
                  <span className="material-symbols-outlined me-2">checkbook</span>Create Expense
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }