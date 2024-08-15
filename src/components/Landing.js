import { Link } from 'react-router-dom';

export default function Landing(props) { 
    
    return (
        <main>
            {/* <!-- words with "Share Expenses with your Group" with a background image stuck to the top --> */}
            {/* <!-- button underneath "Create New Trip" --> */}
            <div className="landing-cover">
                <div className="row justify-content-center">
                    <h1 className="col-5 justify-content-center">Share Travel Expenses with Your Group</h1>
                </div>
                <Link to="/createtrip" className="btn btn-primary justify-content-center create-new-trip-btn">Create New Trip</Link>
            </div>

            <div className="about-section">
                <h1>about</h1>
                <p>Summary of what TripSplit does.</p>
            </div>

        </main>
    ); 
}