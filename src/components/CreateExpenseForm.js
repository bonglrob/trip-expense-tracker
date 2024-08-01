import Select from 'react-select';

export function CreateExpenseForm(props) {

    // Todo: Pass tripsDataArray here and accept only needed data
    // Todo: Change inputs into a controlled form  https://youtu.be/fBILD_NqP08?si=cN-rCzvx77r31sbu&t=478
      // expenseCategory input
    // Todo: Handle Form Submission Data https://youtu.be/fBILD_NqP08?si=LPfLTx7gDZda42FT&t=920

    const categoryOptions = [
      { "value": "Food & Drinks", "label": "Food & Drinks" },
      { "value": "Hotel & Lodging", "label": "Hotel & Lodging" },
      { "value": "Flight", "label": "Flight" },
      { "value": "Transportation", "label": "Transportation" },
      { "value": "Entertainment", "label": "Entertainment" },
      { "value": "Other", "label": "Other" }
    ];

    // Todo pass tripsDataArray currencies here:
    const currencyOptions = [
      { "value": "USD", "label": "USD" },
      { "value": "KRW", "label": "KRW" },
    ]

    // styles for <Select> category options 
    const selectedStyles = {
      option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? '#b3f1be' : state.isFocused ? '#d3e8d3' : null,
        color: state.isSelected ? '#181d18' : '#00210c',
      })
    };

    // styles for <Select> currency options 
    const selectedCurrencyStyles = {
      control: (provided) => ({
        ...provided,
        borderRadius: "5px 0px 0px 5px"
      }),
      indicatorSeparator: () => ({
        display: "none"
      }),
      option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? '#b3f1be' : state.isFocused ? '#d3e8d3' : null,
        color: state.isSelected ? '#181d18' : '#00210c',
      })
    };

    return (
        <div className="container mt-4">
            <div className="d-flex align-items-center"><h1>New Expense</h1></div>

        <form id="create-expense" className="row g-3">

            {/* exepenseName input */}
            <div className="col-md-4">
              <label htmlFor="expenseName" className="form-label">Name</label>
              <input
                id="expenseName"
                name="expenseName"
                type="text"
                className="form-control"
                placeholder="Jajangmyeon Restaurant"
                required
              />
            </div>

            {/* date input */}
            <div className="col-md-4">
                <label htmlFor="date" className="form-label">Date</label>
                <div className="input-group">
                    <input
                      id="date"
                      type="text"
                      className="form-control"
                      placeholder="7/18/2024"
                    />
                    <span className="input-group-text">
                        <span className="material-symbols-outlined">calendar_today</span>
                    </span>
                </div>
            </div>

            {/* <!-- expenseCategory dropdown --> */}
            <div className="col-md-4">
              <label htmlFor="expenseCategory" className="form-label">Category</label>
              <Select 
                  id="expenseCategory"
                  value={categoryOptions[0]}
                  onChange=""
                  options={categoryOptions}
                  isSearchable
                  styles={selectedStyles}
                  maxMenuHeight={140}
              />
            </div>               
           
            {/* cost input */}
            <div className="col-md-4">
              <label htmlFor="cost" className="form-label">Cost</label>
              <div className="input-group">
                <Select
                  id="cost"
                  value=""
                  onChange=""
                  options={currencyOptions}
                  styles={selectedCurrencyStyles}
                  maxMenuHeight={140}
                  aria-label="currency selector"
                />
                <input
                  id="cost"
                  type="text"
                  className="form-control"
                  placeholder="55,423"
                  required
                />
              </div>
            </div>

            {/* <!-- paid by dropdown --> */}
            <div className="col-md-3">
                <label htmlFor="paidBySelect" className="form-label">Paid by</label>
                <select id="paidBySelect" className="form-select" aria-label="select paid by">
                  <option selected value="Kara">Kara</option>
                  <option value="Josh">Josh</option>
                  <option value="Kevin">Kevin</option>
                  <option value="Michelle">Michelle</option>
                </select>
            </div>                

            {/* <!-- paid for checklist --> */}
            <div className="col-md-6">
                <label htmlFor="paidFor" className="form-label">Paid for</label>
                <div id="paidFor" className="form-check">
                    <label className="form-check-label" htmlFor="paidForKara">
                      Kara
                    </label>
                    <input 
                        className="form-check-input"
                        type="checkbox"
                        value="Kara"
                        id="paidForKara"
                        aria-checked="true"
                        checked/>
                </div>
                <div className="form-check" id="paidFor">
                    <label className="form-check-label" htmlFor="paidForJosh">
                      Josh
                    </label>
                    <input 
                        className="form-check-input"
                        type="checkbox"
                        value="Josh"
                        id="paidForJosh"
                        aria-checked="true"
                        checked/>
                </div>
                <div className="form-check" id="paidForKevin">
                    <label className="form-check-label" htmlFor="paidForKevin">
                      Kevin
                    </label>
                    <input 
                        className="form-check-input"
                        type="checkbox"
                        value="Kevin"
                        id="paidForKevin"
                        aria-checked="true"
                        checked/>
                </div>
                <div className="form-check" id="paidFor">
                    <label className="form-check-label" htmlFor="paidForMichelle">
                      Michelle
                    </label>
                    <input 
                        className="form-check-input"
                        type="checkbox"
                        value="Michelle"
                        id="paidForMichelle"
                        aria-checked="true"
                        checked/>
                </div>
            </div>

            {/* <!-- notes text input --> */}
            <div className="col-12">
                <label htmlFor="notes" className="form-label">Notes</label>
                <textarea className="form-control" id="notes"></textarea>
            </div>

            {/* <!-- submit form button --> */}
            <div className="d-flex align-items-center col-12">
              <button className="btn btn-primary me-3" type="submit">Create</button>
              <a href="index.html" className="text-decoration-none"><span className="me-2" type="submit">Cancel</span></a>
            </div>
          </form>
    </div>
    );
}