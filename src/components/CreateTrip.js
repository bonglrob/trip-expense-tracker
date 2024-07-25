export default function CreateTrip(props) {
    return (
        <div className="container mt-4">
            <h1 className="color-primary">Create Trip</h1>
            
            {/* Box */}
            <div className="row">
                <div className="col">
                    <form className="card create-trip">
                        {/* image */}
                        <img src="image/group-trip-cropped.jpg" alt="Friends hugging and sitting toward the water." className="create-trip-img"></img>
                        
                        {/* form */}
                        <div className="card-body">

                            {/* trip inputs */}
                            <div className="row mx-0">

                                {/* trip name and members */}
                                <div className="col">
                                    <TripName />
                                    <Members />
                                </div>

                                {/* start date and currency */}
                                <div className="col">
                                    <StartDate />
                                    <Currency />
                                </div>

                            </div>
                            
                            {/* create, cancel */}
                            <FinishButtons />
                            
                            {/* // save, delete, cancel
                            <SettingsFinishButtons /> */}

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

function TripName(props) {


    return (
        <div className="row px-0">
            <div className="card-title">Name</div>
            <div>
                <input className="form-control" id="" name="Name" placeholder="Korea"></input>
            </div>
        </div>
    );
}

function Members(props) {
    
    return (
        <div className="row px-0">
            <div className="card-title">Members</div>
            <div className="d-flex">
                <input className="form-control" id="" name="member" placeholder="Gabriella"></input>
                <span className="material-symbols-outlined">delete</span>
            </div>
            <div className="d-flex">
                <input className="form-control" id="" name="member" placeholder="Troy"></input>
                <span className="material-symbols-outlined">delete</span>
            </div>
            <div className=" flex-row mx-0 d-flex">
                <button className="btn btn-tertiary" type="button">Add</button>    
            </div>                                        
        </div>
    );
}

function StartDate(props) {
    
    return (
        <div className="row px-0">
            <div className="card-title">Start Date</div>
            <div>
                <input className="form-control" id="" name="Start-Date" type="date"></input>
            </div>
        </div>
    );
}

function Currency(props) {
    
    return (
        <div className="row px-0">
            <div className="card-title">Currency of Home Country</div>
            <div className="dropdown">
                <a className="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Currency
                </a>

                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">$</a></li>
                    <li><a className="dropdown-item" href="#">--</a></li>
                    <li><a className="dropdown-item" href="#">--</a></li>
                </ul>
            </div>
        </div>
    );
}

function FinishButtons(props) {

    return (
        <div className="flex-row mx-0 d-flex justify-content-end">
            <a href="expenses-filled.html" aria-label="to-expenses">
                <button className="btn btn-primary" type="submit">Create</button>
            </a>
            <a href="my-trips.html" aria-label="to-trips" className="btn btn-cancel">Cancel</a>
        </div>
    );
} 

// function SettingsFinishButtons(props) {
//     return (
//         <div className="flex-row mx-0 d-flex justify-content-end">
//             <a href="#" aria-label="to-expenses">
//                 <button className="btn btn-primary" type="submit">Save</button>
//             </a>
//             <a href="my-trips.html" aria-label="to-trips">
//                 <button className="btn btn-delete" type="button">Delete</button>
//             </a>
//             <a href="settings.html" aria-label="to-trips" className="btn btn-cancel">Cancel</a>
//         </div>
//     );
// }