import React, { useState } from 'react';
import { CurrencySelect } from "./CurrencySelect.js";
import { AltCurrencySelect } from './AltCurrencySelect.js';
import { useNavigate, Link } from 'react-router-dom';

// Main CreateTrip component
export default function CreateTrip({ currencyNames, mainCurrencyCallback, altCurrencyCallback, setMembersCallback, sendTripDataCallback}) {

    const handleCreateTrip = () => {
        // Collect members data
        const members = []; // Example members data
        setMembersCallback(members); // Call the callback with members data
    };
    
    function handleSubmit(event) {
        event.preventDefault();
        // submit currency
        // submit altcurrency
        // submit members
        // addExpense(currency, altCurrency, members);
    }

    return (
        <div className="container mt-4">
            <h1 className="color-primary">Create Trip</h1>
            
            <div className="row">
                <div className="col">
                    <form className="card create-trip" onSubmit={handleSubmit}>
                        {/* Image */}
                        <img src="image/group-trip-cropped.jpg" alt="Friends hugging and sitting toward the water." className="create-trip-img" />
                        
                        <div className="card-body">
                            <div className="row mx-0">
                                <div className="col">
                                    {/* TripName component */}
                                    <TripName />
                                    
                                    <Members />
                                </div>
                                <div className="col">
                                    {/* StartDate component */}
                                    <StartDate />
                                    
                                    <div className="col-7 px-0">
                                        <CurrencySelect currencyOptions={currencyNames} mainCurrencyCallback={mainCurrencyCallback} />
                                    </div>

                                    <div className="col-7 px-0">
                                        <AltCurrencySelect currencyOptions={currencyNames} altCurrencyCallback={altCurrencyCallback} />
                                    </div>
                                </div>
                            </div>
                            
                            {/* Finish buttons for Create and Cancel */}
                            <FinishButtons handleCreateTrip={handleCreateTrip} sendTripDataCallback={sendTripDataCallback} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

// Component for Trip Name input field
function TripName(props) {
    const [tripName, setTripName] = useState('');

    const handleNameChange = (event) => {
        setTripName(event.target.value);
    };

    return (
        <div className="row px-0">
            <div className="card-title">Name</div>
            <div>
                <input className="form-control" id="" name="Name" placeholder="Korea" onChange={handleNameChange} value={tripName}></input>
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

    const [startDate, setStartDate] = useState('');
    console.log(startDate);

    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
    };

    return (
        <div className="row px-0">
            <div className="card-title">Start Date</div>
            <div>
                <input className="form-control" id="" name="Start-Date" type="date" onChange={handleStartDateChange} value={startDate}></input>
            </div>
        </div>
    );
}


// Component for Finish buttons (Create and Cancel)
function FinishButtons({ sendTripDataCallback, handleCreateTrip }) {
    const navigate = useNavigate();

    function handleSubmit(event) {
        console.log(event);
        event.preventDefault();
        // sendTripDataCallback(currency, altCurrency);

        navigate("/expenses");
    }

    return (
        <div className="flex-row mx-0 d-flex justify-content-end">
            <button id="submitButton" type="submit" className="btn btn-primary" onClick={handleSubmit}>Create</button>
            <Link to="/mytrips" className="btn btn-cancel">Cancel</Link>
        </div>
    );
}