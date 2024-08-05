import { Link } from 'react-router-dom';

export default function MyTrips({ tripsDataArray }) { 

    const tripsCardArray = tripsDataArray.map((tripObj) => {
        const transformed = (
            <TripCard key={tripObj.tripName} tripObj={tripObj} />
        );
        return transformed;
    });

    return (
        <div className="container mt-4">
            
            {/* Title and Create Trip Button */}
            <section className="row">
                <div className="col col-sm-3">
                    <h1 className="color-primary">Trips</h1>
                </div>
                <div className="col ms-lg-auto col-sm-11 col-lg-3">
                    <div className="card create-trip-card">
                        <Link to="/createtrip">
                            <div className="card-body d-flex justify-content-center align-items-center">
                                <div className="card-title m-0">Create Trip +</div>
                            </div>
                        </Link>
                    </div>                    
                </div>
            </section>
            
            {/* Box */}
            <section className="row">
                <div className="col d-flex flex-wrap gap-3 trip-cards">
                    {tripsCardArray}
                </div>
            </section>
        </div>
    ); 
}

function TripCard({ tripObj }) {
    
    const { tripName, members, startDate } = tripObj;
    const numMembers = members.length;

    return (
        <div key={tripName} className="card trip-card">
            <Link to={`/expenses/${tripName}`}>
                <div className="card-body">
                    <div className="card-title">{tripName}</div> 
                    <div className="row">
                        <div className="col card-text">{numMembers} members</div>
                        <div className="col card-text text-end">{startDate}</div>
                    </div>
                </div>
            </Link>
        </div>        
    );
}
