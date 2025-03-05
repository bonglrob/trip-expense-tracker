export default function Footer(props) { 
    
    return (
        <footer className="d-flex justify-content-center mt-auto">
            <div className="d-flex gap-2 align-items-center">
                <p className="m-1">&copy; 2025 TripSplit </p>
                <a href="https://github.com/bonglrob/trip-expense-tracker">
                    <img className="github" src="image/github-icon.svg" alt="github icon" />
                </a>       
            </div>
        </footer>
    ); 
}