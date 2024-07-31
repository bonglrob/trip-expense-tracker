export default function MyTrips({ tripsDataArray, members }) { // Receive members as a prop
    console.log(members); // Log members to verify data

    return (
        <main className="flex-grow-1">
            <div className="container mt-4">
                
                {/* Title and Create Trip Button */}
                <div className="row">
                    <div className="col">
                        <h1 className="color-primary">Trips</h1>
                    </div>
                    <div className="col">
                        <div className="card create-trip-card">
                            <a href="create-trip.html">
                                <div className="card-body d-flex justify-content-center align-items-center">
                                    <div className="card-title m-0">Create Trip +</div>
                                </div>
                            </a>
                        </div>                    
                    </div>
                </div>
                
                {/* Box */}
                <div className="row">
                    <div className="col d-flex flex-wrap trip-cards">
                        
                        {/* 
                        <TripCard tripObj=""/>
                        <TripCard tripObj=""/>
                        <TripCard tripObj=""/>
                         */}

                        <div className="card trip-card">
                            <a href="expenses-filled.html">
                                <div className="card-body">
                                    <div className="card-title">Korea</div>
                                    <div className="row">
                                        <div className="col card-text">6 members</div>
                                        <div className="col card-text text-end">12/20/2023</div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="card trip-card">
                            <a href="expenses-filled.html">
                                <div className="card-body">
                                    <div className="card-title">London</div>
                                    <div className="row">
                                        <div className="col card-text">2 Members</div>
                                        <div className="col card-text text-end">12/20/2023</div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="card trip-card">
                            <div className="card-body">
                                <div className="card-title">Mexico</div>
                                <div className="row">
                                    <div className="col card-text">2 Members</div>
                                    <div className="col card-text text-end">12/20/2023</div>
                                </div>
                            </div>
                        </div>

                        <div className="card trip-card">
                            <div className="card-body">
                                <div className="card-title">Seattle | Portland</div>
                                <div className="row">
                                    <div className="col card-text">6 Members</div>
                                    <div className="col card-text text-end">12/20/2023</div>
                                </div>   
                            </div>
                        </div>

                        <a href="create-trip.html">
                            <div className="card create-trip-card">
                                <div className="card-body d-flex justify-content-center align-items-center">
                                    <div className="card-title m-0">Create Trip +</div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </main>    
    ); 
}

function TripCard({ tripObj }) {
    return (
        <div className="card trip-card">
            <a href="expenses-filled.html">
                <div className="card-body">
                    <div className="card-title">{tripObj.tripName}</div> 
                    <div className="row">
                        <div className="col card-text">{tripObj.numMembers}</div>
                        <div className="col card-text text-end">{tripObj.startDate}</div>
                    </div>
                </div>
            </a>
        </div>
    );
}
