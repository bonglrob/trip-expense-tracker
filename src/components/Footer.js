import { Link } from 'react-router-dom';

export default function Footer(props) { 
    
    return (
        <footer className="mt-5">
            <div className="d-flex flex-column align-items-center">
                {/* <div className="footer-links">
                    <p>
                        <Link to="/landing" aria-label="Home" className="px-1">Home</Link>
                        <Link to="#" aria-label="About"className="px-1">About</a>
                        <Link to="#" aria-label="FAQ" className="px-1">Frequently Asked Questions</Link>
                    </p>         
                </div> */}
                <p>&copy; TripSplit <a href="https://github.com/info340-su24/travel-expenses-B7"><img className="github" src="image/github-icon.svg" alt="github icon" /></a></p>
                <p className="text-center">
                    Created by Robert Bonglamphone, Emma Esteban, and Nick Chiu
                </p>            
                <p className="text-center">
                    Part of University of Washington course INFO 340
                </p> 
            </div>
        </footer>
    ); 
}