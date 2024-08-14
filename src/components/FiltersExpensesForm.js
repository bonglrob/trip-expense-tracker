import Select from "react-select"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import _ from "lodash";

export default function FilterExpensesForm({ tripsDataArray }) {
    const { tripName } = useParams();  

    const index = _.findIndex(tripsDataArray, { tripName: tripName });
    const { startDate, members, currency } = tripsDataArray[index];

    function handleChange() {
        // update state variable ExpensesData to filter for expeneses that meet filter criteria
    }

    const [paidByOptions, setPaidByOptions] = useState([]);

    // currency select option color styles
    const selectedStyles = {
        indicatorSeparator: () => ({
            display: "none"
          }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#b3f1be' : state.isFocused ? '#d3e8d3' : null,
            color: state.isSelected ? '#181d18' : '#00210c',
        }),
        multiValue: (provided) => ({
            ...provided,
            backgroundColor: "#d3e8d3",
        }),
        multiValueLabel: (provided) => ({
            ...provided,
            color: "#0e1f12",
        }),
        multiValueRemove: (provided) => ({
            ...provided,
            color: "#0e1f12",
            ":hover": {
                backgroundColor: "#bdf3c6",
            },
        }),
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
                        id="paidFor"
                        placeholder="Paid for"
                        aria-label="paid-for"
                        options={paidForOptions}
                        isSearchable
                        onChange={handleChange}
                        styles={selectedStyles}
                        isMulti
                    />
                </div>
    
                <div className="col-md-3">
                    {/* paidByName select */}
                    {/* <label htmlFor="paid-by" className="form-label">Paid by</label> */}
                    <Select
                        id="paid-by"
                        placeholder="Paid by"
                        value={""}
                        onChange={""}
                        options={paidByOptions}
                        styles={selectedStyles}
                    />
              </div>

                {/* <!-- date filter --> */}
                <div className="col-md-2 mb-4">
                    {/* <label htmlFor="date" className="form-label">Date</label> */}
                    <div className="input-group" id="date">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="7/12/2024"/>
                        <span className="input-group-text">
                            <span className="material-symbols-outlined">calendar_today</span>
                        </span>
                    </div>
                </div>

                {/* <!-- category select --> */}
                <div className="col-md-2 mb-4">
                    {/* <label htmlFor="expense-category" className="form-label">Category</label> */}
                    <Select
                        id="expense-category"
                        value={""}
                        onChange={handleChange}
                        options={categoryOptions}
                        placeholder="Category"
                        isSearchable
                        styles={selectedStyles}
                        maxMenuHeight={140}
                    />
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