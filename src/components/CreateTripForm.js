import React, { useState } from 'react';
import { CurrencySelect } from "./CurrencySelect.js";
import { AltCurrencySelect } from './AltCurrencySelect.js';
import { useNavigate, Link } from 'react-router-dom';

// Main CreateTrip component
export function CreateTripForm({ onSubmit, currencyNames }) {
    const navigate = useNavigate();

    const [tripFormData, setTripFormData] = useState({
        tripName: "",
        members: ["", ""],
        startDate: "",
        currency: { main: { value: "USD", label: "USD - United States Dollar" }, alt: [], rates: {} }
    });
    
    // handles text input for tripName and startDate
    function handleChange(event) {
        const { name, value } = event.target;

        const updatedTripFormData = { ...tripFormData, [name]: value }
        setTripFormData(updatedTripFormData);
    };

    // Adds new members
    function handleAddMember() {
        const updatedTripFormData = { ...tripFormData, members: [...tripFormData.members, ""]}
        setTripFormData(updatedTripFormData);
    }

    // Removes members
    function handleRemoveMember(index) {
        const newMembers = tripFormData.members.filter((_, memberIndex) => memberIndex !== index);

        const updatedTripFormData = { ...tripFormData, members: newMembers };
        setTripFormData(updatedTripFormData);
    }

    function handleMembersChange(index, event) {
        const newMembers = tripFormData.members.map((member, memberIndex) => {
            if (index === memberIndex) {
                return event.target.value;
            }
            return member;
        })
        const updatedTripFormData = { ...tripFormData, members: newMembers };
        setTripFormData(updatedTripFormData);
    }

    // takes mainCurrency parameter: e.g. {value: USD, label: USD}
    function handleCurrencyChange(mainCurrency) {
        const updatedTripFormData = { ...tripFormData, currency: { ...tripFormData.currency, main: mainCurrency } };
        setTripFormData(updatedTripFormData);
    }

    // @param Array[Object] altCurrency e.g. [{value: USD, label: USD}, {value: GBP, label: GBP}] 
    function handleAltCurrencyChange(altCurrency) {
        const updatedTripFormData = { ...tripFormData, currency: { ...tripFormData.currency, alt: altCurrency } };
        setTripFormData(updatedTripFormData);
    }
    
    // passes tripFormData to tripsDataArray in App.js
    function handleSubmit(event) {
        event.preventDefault();

        onSubmit(tripFormData);

        navigate("/mytrips");
    };
    
    return (
        <div className="container mt-4">
            <h1 className="color-primary">Create Trip</h1>
            
            <div className="row">
                <div className="col">
                    <form id="create-trip" className="card create-trip" onSubmit={handleSubmit}>
                        {/* Image */}
                        <img src="image/group-trip-cropped.jpg" alt="Friends hugging and sitting toward the water." className="create-trip-img" />
                        
                        <div className="card-body">
                            <div className="row mx-0">
                                <div className="col">
                                    {/* TripName component */}
                                    <div className="col px-0 mb-4">
                                        <TripName handleChange={handleChange}/>
                                    </div>

                                    <div className="col px-0">
                                        <Members members={tripFormData.members} handleRemoveMember={handleRemoveMember} handleAddMember={handleAddMember} handleChange={handleMembersChange}/>
                                    </div>
                                </div>

                                <div className="col">
                                    {/* StartDate component */}
                                    <div className="col-7 px-0 mb-4">
                                        <StartDate startDate={tripFormData.startDate} handleChange={handleChange}/>
                                    </div>

                                    <div className="col-7 px-0 mb-4">
                                        <CurrencySelect mainCurrency={tripFormData.currency.main} currencyOptions={currencyNames} handleChange={handleCurrencyChange} />
                                    </div>

                                    <div className="col-7 px-0 mb-4">
                                        <AltCurrencySelect altCurrency={tripFormData.currency.alt} currencyOptions={currencyNames} handleChange={handleAltCurrencyChange} />
                                    </div>
                                </div>
                            </div>
                            
                            {/* Finish buttons for Create and Cancel */}
                            <div className="d-flex justify-content-end">
                                <FinishButtons />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

// Component for Trip Name input field
function TripName({ tripName, handleChange }) {
    
    return (
        <div>
            <label htmlFor='tripName' className="form-label">Name</label>
            <input 
                id="trip-name"
                name="tripName"
                value={tripName}
                onChange={handleChange}
                className="form-control"
                placeholder="Korea"
            />
        </div>
    );
}

// Members component to manage members input fields
function Members({ members, handleAddMember, handleRemoveMember, handleChange }) {
    // Extracted map function into variable
    const memberInputs = members.map((member, index) => (
        <div className="d-flex mb-2" key={index}>
            <input
                className="form-control"
                name="member"
                value={member}
                onChange={(e) => handleChange(index, e)}
                placeholder={`Member ${index + 1}`}
            />
            <span
                className="material-symbols-outlined"
                onClick={() => handleRemoveMember(index)}
                style={{ cursor: 'pointer' }}
            >
                delete
            </span>
        </div>
    ));

    return (
        <>
            <div className="card-title">Members</div>
            {memberInputs}
            <div className="flex-row mx-0 d-flex">
                <button className="btn btn-tertiary" type="button" onClick={handleAddMember}>Add</button>
            </div>
        </>
    );
}

// Component for Start Date input field
function StartDate({ startDate, handleChange }) {

    return (
        <div>
            <label htmlFor="start-date" className="form-label">Start Date</label>
            <input 
                id="start-date"
                name="startDate"
                value={startDate}
                onChange={handleChange}
                className="form-control"
                type="date"
            />
        </div>
    );
}

// Component for Finish buttons (Create and Cancel)
function FinishButtons(props) {

    return (
        <>
            <button id="submitButton" type="submit" className="btn btn-primary">Create</button>
            <Link to="/mytrips" className="btn btn-cancel">Cancel</Link>
        </>
    );
}