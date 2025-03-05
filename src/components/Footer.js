import { Link } from 'react-router-dom';

export default function Footer(props) { 
    
    return (
        <footer className="mt-auto">
            <div className="d-flex flex-column align-items-center">
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