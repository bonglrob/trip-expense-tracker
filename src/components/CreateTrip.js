import React, { useState } from 'react';

// Main CreateTrip component
export default function CreateTrip(props) {

    return (
        <div className="container mt-4">
            <h1 className="color-primary">Create Trip</h1>
            
            <div className="row">
                <div className="col">
                    <form className="card create-trip">
                        {/* Image */}
                        <img src="image/group-trip-cropped.jpg" alt="Friends hugging and sitting toward the water." className="create-trip-img" />
                        
                        <div className="card-body">
                            <div className="row mx-0">
                                <div className="col">
                                    {/* TripName component */}
                                    <TripName />
                                    
                                    {/* Members component */}
                                    <Members />
                                </div>
                                <div className="col">
                                    {/* StartDate component */}
                                    <StartDate />
                                    
                                    {/* Currency component */}
                                    <Currency />
                                    
                                    <AltCurrency />
                                </div>
                            </div>
                            
                            {/* Finish buttons for Create and Cancel */}
                            <FinishButtons />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

// Component for Trip Name input field
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

// Members component to manage members input fields
function Members(props) {
    // State to manage the list of members
    const [members, setMembers] = useState(['Gabriella', 'Troy']);

    // Function to add a new member input field
    const handleAddMember = () => {
        setMembers([...members, '']);
    };

    // Function to remove a member input field by index
    const handleRemoveMember = (index) => {
        const newMembers = members.filter((_, memberIndex) => memberIndex !== index);
        setMembers(newMembers);
    };

    // Function to update the member name based on user input
    const handleMemberChange = (index, event) => {
        const newMembers = members.map((member, memberIndex) => {
            if (index === memberIndex) {
                return event.target.value;
            }
            return member;
        });
        setMembers(newMembers);
    };

    return (
        <div className="row px-0">
            <div className="card-title">Members</div>
            {/* Render each member input field */}
            {members.map((member, index) => (
                <div className="d-flex mb-2" key={index}>
                    <input
                        className="form-control"
                        id=""
                        name="member"
                        value={member}
                        onChange={(e) => handleMemberChange(index, e)}
                        placeholder={`Member ${index + 1}`}
                    />
                    {/* Delete icon to remove member input */}
                    <span
                        className="material-symbols-outlined"
                        onClick={() => handleRemoveMember(index)}
                        style={{ cursor: 'pointer' }}
                    >
                        delete
                    </span>
                </div>
            ))}
            {/* Add button to add new member input */}
            <div className="flex-row mx-0 d-flex">
                <button className="btn btn-tertiary" type="button" onClick={handleAddMember}>Add</button>
            </div>
        </div>
    );
}

// Component for Start Date input field
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

// Component for Currency dropdown
function Currency(props) {

    const [mainCurrency, setMainCurrency] = useState("$");
    
    return (
        <div className="col-6 px-0">
            <label for="mainCurrency" class="form-label">Currency of Home Country</label>
            <select class="form-select" id="categorySelect">
                <option disabled value="">Choose...</option>
                <option selected value={mainCurrency}>$</option>
                <option value="$">$</option>
            </select>
        </div>
    );
}
function AltCurrency(props) {

    const [altCurrency, setAltCurrency] = useState("₩");
    
    return (
        <div className="col-6 px-0">
            <label for="mainCurrency" class="form-label">Currency of Visiting Country</label>
            <select class="form-select" id="categorySelect">
                <option disabled value="">Choose...</option>
                <option selected value={altCurrency}>{altCurrency}</option>
                <option value="¥">¥</option>
            </select>
        </div>
    );
}

// Component for Finish buttons (Create and Cancel)
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
