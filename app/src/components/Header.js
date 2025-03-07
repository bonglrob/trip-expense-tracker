import { Link } from 'react-router-dom';

export default function Header(props) { 
    
    return (
        <header>
            <nav className="header-nav">
                <ul className="nav">
                    <li className="nav-item">
                        <Link to="/landing" className="btn logo"><span className="material-symbols-outlined material-icons" aria-label="Landing">Travel</span>TripSplit</Link>
                    </li>
                    <li className="nav-item empty">
                    </li>
                    <li className="nav-item py-1 px-2">
                        <Link to="/mytrips" className="btn my-trips-btn">My Trips</Link>
                    </li>
                    {/* <li className="nav-item py-1 px-2">
                        <Link to="#" className="btn  btn-primary header-btn">?</Link>
                    </li> */}
                </ul>
            </nav>
        </header>
    ); 
}