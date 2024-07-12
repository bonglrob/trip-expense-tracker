
export default function Stats() {
    return (
      <div className="bg-light">
        <header>
          <nav className="header-nav">
            <ul className="nav">
              <li className="nav-item">
                <a href="#" className="btn logo">
                  <span className="material-symbols-outlined material-icons" aria-label="Landing">
                    Travel
                  </span>
                  TripSplit
                </a>
              </li>
              <li className="nav-item empty"></li>
              <li className="nav-item py-1 px-2">
                <a href="my-trips.html" className="btn btn-primary header-btn">
                  Trips
                </a>
              </li>
              <li className="nav-item py-1 px-2">
                <a href="#" className="btn btn-primary header-btn">
                  ?
                </a>
              </li>
            </ul>
          </nav>
        </header>
  
        <main>
          <div className="container mt-5">
            <h1 className="color-primary">Korea</h1>
            <div className="row">
              <div className="main-nav container mb-3">
                <nav className="card bg-light">
                  <div className="container-fluid">
                    <ul className="nav">
                      <li className="nav-item">
                        <a className="nav-link" href="index.html">
                          Expenses
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="balances-filled.html">
                          Balances
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active btn" href="#">
                          Stats
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link">Settings</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
  
              <div className="col-md-6 mb-4">
                <div className="card shadow-sm border-0">
                  <div className="card-body">
                    <h2 className="card-title">Money Spent Per Day</h2>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        2024-06-28
                        <span className="badge bg-primary rounded-pill">$45.00</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        2024-06-29
                        <span className="badge bg-primary rounded-pill">$30.00</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        2024-06-30
                        <span className="badge bg-primary rounded-pill">$55.00</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        2024-07-01
                        <span className="badge bg-primary rounded-pill">$25.00</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        2024-07-02
                        <span className="badge bg-primary rounded-pill">$60.00</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card shadow-sm border-0">
                  <div className="card-body">
                    <h2 className="card-title">Money Spent by Category</h2>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        Groceries
                        <span className="badge bg-success rounded-pill">$100.00</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        Dining Out
                        <span className="badge bg-success rounded-pill">$70.00</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        Transportation
                        <span className="badge bg-success rounded-pill">$40.00</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        Entertainment
                        <span className="badge bg-success rounded-pill">$30.00</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        Utilities
                        <span className="badge bg-success rounded-pill">$25.00</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
  
        <footer className="mt-5">
          <div className="d-flex flex-column align-items-center">
            <div className="footer-links">
              <p>
                <a href="#" aria-label="Home" className="px-1">
                  Home
                </a>
                <a href="#" aria-label="About" className="px-1">
                  About
                </a>
                <a href="#" aria-label="FAQ" className="px-1">
                  Frequently Asked Questions
                </a>
              </p>
            </div>
            <p>
              TripSplit{' '}
              <a href="https://github.com/info340-su24/travel-expenses-B7">
                <img className="github" src={favicon} alt="github icon" />
              </a>
            </p>
            <p className="text-center">
              Created by Robert Bonglamphone, Emma Esteban, and Nick Chiu
              <br />
              Part of University of Washington course INFO 340
            </p>
          </div>
        </footer>
      </div>
    );
  }