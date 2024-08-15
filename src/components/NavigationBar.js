import { NavLink, useParams } from 'react-router-dom';

export default function NavigationBar(props) { 
    const { tripName } = useParams();
    
    return (
        <>
            <div className="main-nav container mb-3">
                <nav className="card bg-light">
                    <div className="container-fluid">
                        <ul className="nav">
                            <li className="nav-item">
                                <NavLink to={`/${tripName}/expenses`} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Expenses</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={`/${tripName}/balances`} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Balances</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    ); 
}
