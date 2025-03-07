import { Link } from 'react-router-dom';
import styles from '../styles/landing.module.css'

export default function Landing(props) { 
    
    return (
        <>
            <div className={styles.heroBackground}>
                <div className={`container ${styles.heroContainer}`}>
                    <div className="row">
                        <img className="col col-lg-6 img-fluid" src="/image/blue-japan-tourist.png" alt="a tourist sightseeing in Japan" />
                        <div className="col pl-3 my-auto">
                            <h1 className="mb-4">Travel Together, Split Expenses Effortlessly</h1>
                            <p className="align-self-center">
                                Just add your travel buddies, log expenses as you go, and let TripSplit handle the math. It even converts currencies, so setting up is easy—wherever you are. Spend less time sorting bills and more time making memories!                            </p>
                            <Link to="/createtrip" className="btn btn-primary justify-content-center drop-shadow-btn">Create New Trip</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ); 
}