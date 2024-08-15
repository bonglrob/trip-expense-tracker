import { Link } from 'react-router-dom';

export default function Landing(props) { 
    
    return (
        <>
            {/* <!-- words with "Share Expenses with your Group" with a background image stuck to the top --> */}
            {/* <!-- button underneath "Create New Trip" --> */}
            <div className="landing-cover">
                <div className="row justify-content-center">
                    <h1 className="col-5 justify-content-center">Share Travel Expenses with Your Group</h1>
                </div>
                <Link to="/createtrip" className="btn btn-primary justify-content-center drop-shadow-btn">Create New Trip</Link>
            </div>


                <div className="about-section text-center">
                    <h2>About</h2>
                    <p>
                        Managing expenses during your travels is made easy with TripSplit! Just add your friends and family who are travelling with you and add an expense. TripSplit will automatically keep track of who owes what and even convert the currency to whatever you decide to pay back in! Now, you can get back to living in the moment than time lost fussing over the bills.
                    </p>
                </div>
        </>
    ); 
}