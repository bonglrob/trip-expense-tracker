import { Link } from 'react-router-dom';

export default function Landing(props) { 
    
    return (
        <main>
            {/* <!-- words with "Share Expenses with your Group" with a background image stuck to the top --> */}
            {/* <!-- button underneath "Create New Trip" --> */}
            <div class="landing-cover">
                <h1 class="justify-content-center">Share Travel Expenses<br />with Your Group</h1>
                <Link to="/createtrip" class="btn btn-primary justify-content-center">Create New Trip</Link>
            </div>

            <div class="about-section">
                <h1>about</h1>
                <p>Summary of what TripSplit does.</p>
            </div>

        </main>
    ); 
}