import { Link } from 'react-router-dom';

export default function NavigationBar(props) { 
    
    return (
        <div className="main-nav container mb-3">
            <nav className="card bg-light">
                <div className="container-fluid">
                    <ul className="nav">
                        <li className="nav-item">
                            <Link to="/expenses/:tripName" className="nav-link">Expenses</Link>
                            {/* <a className="nav-link active btn" aria-current="page" href="#">Expenses</a> */}
                        </li>
                        <li className="nav-item">
                            <Link to="/balances/:tripName" className="nav-link">Balances</Link>
                            {/* <a className="nav-link" href="#">Balances</a> */}
                        </li>
                        {/* <li className="nav-item">
                            <Link to="#" className="nav-link">Stats</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#" className="nav-link">Settings</Link>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </div>
    ); 
}
