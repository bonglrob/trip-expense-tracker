export default function MyTrips() {
    return (
        <main className="flex-grow-1">
            <div className="container mt-4">
                <h1 className="color-primary">Trips</h1>
                
                {/* Box */}
                <div className="row">
                    <div className="col d-flex flex-wrap trip-cards">
                        
                        {/* 
                        <TripCard tripObj=""/>
                        <TripCard tripObj=""/>
                        <TripCard tripObj=""/>
                         */}

                        <a href="expenses-filled.html">
                            <div className="card trip-card">
                                <div className="card-body">
                                    <div className="card-title">Korea</div>
                                    <div className="row">
                                        <div className="col card-text">6 Members</div>
                                        <div className="col card-text text-end">12/20/2023</div>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <div className="card trip-card">
                            <div className="card-body">
                                <div className="card-title">London</div>
                                <div className="row">
                                    <div className="col card-text">2 Members</div>
                                    <div className="col card-text text-end">12/20/2023</div>
                                </div>
                            </div>
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
                                <div className="card-body d-flex justify-content-center  align-items-center">
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
/*
function TripCard(props) {

    return (
        <a href="expenses-filled.html">
            <div className="card trip-card">
                <div className="card-body">
                    <div className="card-title">{tripName}</div>
                    <div className="row">
                        <div className="col card-text">{numMembers}</div>
                        <div className="col card-text text-end">{startDate}</div>
                    </div>
                </div>
            </div>
        </a>
    );
}
    */