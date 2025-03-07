import Select from "react-select"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import _ from "lodash";

export default function FilterExpensesForm({ tripsDataArray, applyFilterCallback }) {
    const { tripName } = useParams();  

    const index = _.findIndex(tripsDataArray, { tripName: tripName });
    const { startDate, members, currency } = tripsDataArray[index];

    const [selectedPaidFor, setSelectedPaidFor] = useState(null);
    const [selectedPaidBy, setSelectedPaidBy] = useState(null);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(null);
    applyFilterCallback(selectedPaidFor, selectedPaidBy, selectedDate, selectedCategory);
    // console.log('DEBUG:', selectedPaidFor, selectedPaidBy, selectedDate, selectedCategory);


    function handlePaidForChange(updatedSelectedPaidFor) {
        setSelectedPaidFor(updatedSelectedPaidFor);
        applyFilterCallback(selectedPaidFor, selectedPaidBy, selectedDate, selectedCategory);
    }
    function handlePaidByChange(updatedSelectedPaidBy) {
        setSelectedPaidBy(updatedSelectedPaidBy);
        applyFilterCallback(selectedPaidFor, selectedPaidBy, selectedDate, selectedCategory);
    }

    function handleDateChange(event) {
        const value = event.target.value;
        setSelectedDate(value);
        applyFilterCallback(selectedPaidFor, selectedPaidBy, selectedDate, selectedCategory);
    }
    function handleCategoryChange(updatedSelectedCategory) {
        setSelectedCategory(updatedSelectedCategory);
        applyFilterCallback(selectedPaidFor, selectedPaidBy, selectedDate, selectedCategory);
    }

    function handleClick() {
        setSelectedPaidFor(null);
        setSelectedPaidBy(null);
        setSelectedDate('');
        setSelectedCategory(null);
        applyFilterCallback(selectedPaidFor, selectedPaidBy, selectedDate, selectedCategory);
    }

    const [paidByOptions, setPaidByOptions] = useState([]);

    // select option color styles
    const selectedStyles = {
        indicatorSeparator: () => ({
            display: "none"
          }),
        multiValue: (provided) => ({
            ...provided,
            backgroundColor: "rgb(114, 163, 255)",
        }),
        multiValueLabel: (provided) => ({
            ...provided,
            color: "rgb(33 72 118)",
        }),
        multiValueRemove: (provided) => ({
            ...provided,
            color: "rgb(33 72 118)",
            ":hover": {
                backgroundColor: "rgb(223, 234, 255)",
            },
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? 'rgb(212 227 255)' : state.isFocused ? 'rgb(114, 163, 255)' : null,
            color: state.isSelected ? 'rgb(25 28 32)' : 'rgb(33 72 118)',
          })
    }

    // populate with options of "paid for" group members 
    // Todo: replace members variable with passed props 
    const paidForOptions = members.map((member) => ({
        value: member,
        label: member,
    }));

    const categoryOptions = [
        { "value": "Food & Drinks", "label": "Food & Drinks" },
        { "value": "Hotel & Lodging", "label": "Hotel & Lodging" },
        { "value": "Flight", "label": "Flight" },
        { "value": "Transportation", "label": "Transportation" },
        { "value": "Entertainment", "label": "Entertainment" },
        { "value": "Other", "label": "Other" }
    ];

    useEffect(() => {
        const paidByOptionsArray = members.map(member => ({"value": member, "label": member}));
        setPaidByOptions(paidByOptionsArray);
      }, [tripsDataArray]);

    return (
        <div className="container mt-3">

            <div className="row">

                <div className="col col-md-1">
                    <span className="material-symbols-outlined d-flex align-items-center justify-content-center fs-3 mt-1">tune</span>
                </div>

                <div className="col col-md-4">
                    <Select
                        value={selectedPaidFor}
                        id="paidFor"
                        placeholder="Paid for"
                        aria-label="paid-for"
                        options={paidForOptions}
                        isSearchable
                        onChange={handlePaidForChange}
                        styles={selectedStyles}
                        isMulti
                    />
                </div>
    
                <div className="col-md-2">
                    {/* paidByName select */}
                    {/* <label htmlFor="paid-by" className="form-label">Paid by</label> */}
                    <Select
                        id="paid-by"
                        placeholder="Paid by"
                        value={selectedPaidBy}
                        onChange={handlePaidByChange}
                        options={paidByOptions}
                        isClearable
                    />
                </div>

                {/* <!-- date filter --> */}
                <div className="col-md-2 mb-4">
                    {/* <label htmlFor="date" className="form-label">Date</label> */}
                    <div className="input-group" id="date">
                        <input
                            type="date"
                            value={selectedDate}
                            className="form-control date-filter"
                            placeholder={startDate}
                            onChange={handleDateChange}
                        />
                        {/* <span className="input-group-text">
                            <span className="material-symbols-outlined">calendar_today</span>
                        </span> */}
                    </div>
                </div>

                {/* <!-- category select --> */}
                <div className="col-md-2 mb-4">
                    {/* <label htmlFor="expense-category" className="form-label">Category</label> */}
                    <Select
                        id="expense-category"
                        value={selectedCategory}
                        placeholder="Category"
                        onChange={handleCategoryChange}
                        options={categoryOptions}
                        isSearchable
                        isClearable
                        maxMenuHeight={140}
                    />
                </div>  

                <div className="col col-md-1">
                    <button className="btn btn-tertiary" type="submit" onClick={handleClick}>Clear</button>
                </div>

                {/* <!-- apply filters button --> */}
                {/* <div className="d-flex justify-content-end align-items-center mb-3">
                    <button className="btn btn-tertiary me-2" type="submit">Apply Filters</button>
                    <button className="btn btn-tertiary" type="submit">Clear</button>
                </div> */}
            </div>
         </div>
    )
}