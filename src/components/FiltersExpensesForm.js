import Select from "react-select"

export default function FilterExpensesForm(props) {
    
    // Todo: Pass members array here (hardcoded for now)
    const members = ["Kevin", "Michelle", "Josh", "Kara"]; 

    function handleChange() {
        // update state variable ExpensesData to filter for expeneses that meet filter criteria
    }

    // currency select option color styles
    const selectedStyles = {
        multiValue: (provided) => ({
            ...provided,
            backgroundColor: "#b3f1be",
        }),
        multiValueLabel: (provided) => ({
            ...provided,
            color: "#00210c",
        }),
        multiValueRemove: (provided) => ({
            ...provided,
            color: "#00210c",
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

    return (
        <div class="container mt-4">

            {/* <!-- filter button --> */}
            <div>
                <span className="btn"><span className="material-symbols-outlined">tune</span></span>
            </div>


            <div class="input-group">
                <label htmlhtmlFor="paidFor" className="form-label">Paid For</label>
                <Select
                    id="paidFor"
                    options={paidForOptions}
                    isSearchable
                    onChange={handleChange}
                    styles={selectedStyles}
                    isMulti
                />
            </div>


            <div class="row">
                {/* <!-- paid for --> */}
                <div class="col-md-4">
                    <label htmlFor="paidFor" class="form-label">Paid for</label>
                    <div class="form-check" id="paidFor">
                        <label class="form-check-label" htmlFor="paidForKara">
                          Kara
                        </label>
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value="Kara"
                            id="paidForKara"
                            aria-checked="false"/>
                    </div>
                    <div class="form-check" id="paidFor">
                        <label class="form-check-label" htmlFor="paidForJosh">
                          Josh
                        </label>
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value="Josh"
                            id="paidForJosh"
                            aria-checked="false"/>
                    </div>
                    <div class="form-check" id="paidForKevin">
                        <label class="form-check-label" htmlFor="paidForKevin">
                          Kevin
                        </label>
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value="Kevin"
                            id="paidForKevin"
                            aria-checked="false"/>
                    </div>
                    <div class="form-check" id="paidFor">
                        <label class="form-check-label" htmlFor="paidForMichelle">
                          Michelle
                        </label>
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value="Michelle"
                            id="paidForMichelle"
                            aria-checked="false"/>
                    </div>
                </div>
    
                {/* <!-- paid by --> */}
                <div class="col-md-4">
                    <label htmlFor="paidFor" class="form-label">Paid for</label>
                    <div class="form-check" id="paidFor">
                        <label class="form-check-label" htmlFor="paidForKara">
                          Kara
                        </label>
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value="Kara"
                            id="paidForKara"
                            aria-checked="true"
                            checked/>
                    </div>
                    <div class="form-check" id="paidFor">
                        <label class="form-check-label" htmlFor="paidForJosh">
                          Josh
                        </label>
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value="Josh"
                            id="paidForJosh"
                            aria-checked="false"/>
                    </div>
                    <div class="form-check" id="paidForKevin">
                        <label class="form-check-label" htmlFor="paidForKevin">
                          Kevin
                        </label>
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value="Kevin"
                            id="paidForKevin"
                            aria-checked="false"/>
                    </div>
                    <div class="form-check" id="paidFor">
                        <label class="form-check-label" htmlFor="paidForMichelle">
                          Michelle
                        </label>
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value="Michelle"
                            id="paidForMichelle"
                            aria-checked="false"/>
                    </div>
                </div>

                {/* <!-- date filter --> */}
                <div class="col-md-5 mb-4">
                    <label htmlFor="date" class="form-label">Date</label>
                    <div class="input-group" id="date">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="7/12/2024 - 7/18/2024"/>
                        <span class="input-group-text">
                            <icon class="material-symbols-outlined">calendar_today</icon>
                        </span>
                    </div>
                </div>

                {/* <!-- category select --> */}
                <div class="col-md-3 mb-4">
                    <label htmlFor="categorySelect" class="form-label">Category</label>
                    <select class="form-select" id="categorySelect" aria-label="select category">
                      <option disabled value="">Choose...</option>
                      <option selected value="Food & Drink">Food & Drinks</option>
                      <option value="Hotel & Lodging">Hotel & Lodging</option>
                      <option value="Flight">Flight</option>
                      <option value="Transportation">Transportation</option>
                      <option value="Entertainment">Entertainment</option>
                      <option value="Other">Other</option>
                    </select>
                </div>     

                {/* <!-- apply filters button --> */}
                <div class="d-flex justify-content-end align-items-center col-12">
                    <button class="btn btn-primary me-2" type="submit">Apply</button>
                    <button class="btn btn-primary me-2" type="submit">Clear</button>
                    <a href="index.html"><span class="me-2" type="submit">Cancel</span></a>
                </div>
            </div>
         </div>
    )
}