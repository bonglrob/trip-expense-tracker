import NavigationBar from "./NavigationBar";

export default function FilledBalances() {
    return (
      <div className="bg-light">
        <main>
          <div className="container mt-4">
            <h1 className="color-container-primary-on">Korea</h1>
            <div className="row">
              <NavigationBar />
  
              <div className="col-lg-6 mb-4">
                <div className="card shadow-sm border-0">
                  <div className="card-body">
                    <h1 className="card-title">Overall Debt</h1>
                    <p className="card-text">Here is the overall debt of each person:</p>
                    <ul className="list-group">
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        Kara
                        <span className="badge bg-success rounded-pill">+ $50</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        Josh
                        <span className="badge bg-danger rounded-pill">- $30</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        Kevin
                        <span className="badge bg-success rounded-pill">+ $70</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        Michelle
                        <span className="badge bg-danger rounded-pill">- $10</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card shadow-sm border-0">
                  <div className="card-body">
                    <h1 className="card-title">Balances</h1>
                    <p className="card-text">Here are the current balances:</p>
                    <ul className="list-group">
                      <li className="list-group-item">
                        Josh <span className="icon-center material-symbols-outlined">arrow_forward</span> owes Kara: $100
                      </li>
                      <li className="list-group-item">
                        Michelle <span className="icon-center material-symbols-outlined">arrow_forward</span> owes Kevin: $50
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
                <img className="github" src="image/github-icon.svg" alt="github icon" />
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