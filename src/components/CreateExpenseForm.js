import Select from 'react-select';
import { useParams } from 'react-router-dom';

export function CreateExpenseForm({ tripsDataArray }) {

    //  = useParams();

    const { startDate, members, currency } = tripsDataArray;
    console.log(startDate, members, currency);
    
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
    
    const splitMethodOptions = [
      { "value": "Evenly", "label": "Evenly" },
      { "value": "By Percentage", "label": "By Percentage" },
      { "value": "By amount", "label": "By amount" }
    ]

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
      container: (provided) => ({
        ...provided,
        width: "80px"
      }),
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

              <section class="card">
                <div class="card-body">
                  <div class="row">

                    {/* exepenseName input */}
                    <div className="col-md-4">
                      <label htmlFor="expense-name" className="form-label">Name</label>
                      <input
                        id="expense-name"
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
                      <label htmlFor="expense-category" className="form-label">Category</label>
                      <Select
                          id="expense-category"
                          value={categoryOptions[0]}
                          onChange=""
                          options={categoryOptions}
                          isSearchable
                          styles={selectedStyles}
                          maxMenuHeight={140}
                      />
                    </div>

                    {/* cost input */}
                    <div className="col-md-3">
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
                    {/* paidByName select */}
                    <div className="col-md-2">
                        <label htmlFor="paid-by" className="form-label">Paid by</label>
                        <select id="paid-by" className="form-select" aria-label="select paid by">
                          <option selected value="Kara">Kara</option>
                          <option value="Josh">Josh</option>
                          <option value="Kevin">Kevin</option>
                          <option value="Michelle">Michelle</option>
                        </select>
                    </div>
                  </div>
                </div>
              </section>   

              <section class="card">
                <div className="card-body col-md-6">

                  {/* paidForNames */}
                  <div class="mb-4">
                    <label htmlFor="paid-for" className="form-label">Paid for</label>
                    <div className="d-flex align-items-center form-check">
                        <div className='me-5'>
                          <label className="form-check-label" htmlFor="paidForKara">Kara</label>
                          <input
                              id="paid-for-kara"
                              className="form-check-input"
                              type="checkbox"
                              value="Kara"
                          />
                        </div>
                        <div className='ms-auto'>
                          <input
                            id="cost-for-kara"
                            type="text"
                            className="form-control bottom-border-only"
                            placeholder="13855"
                          />
                        </div>
                    </div>
                    <div className="d-flex align-items-center form-check">
                        <div className='me-5'>
                          <label className="form-check-label" htmlFor="paidForKara">Josh</label>
                          <input
                              className="form-check-input"
                              type="checkbox"
                              value="Kara"
                              id="paidForKara"
                          />
                        </div>
                        <div className='ms-auto'>
                          <input
                            id="cost-for-kara"
                            type="text"
                            className="form-control bottom-border-only"
                            placeholder="13855"
                          />
                        </div>
                    </div>
                    <div className="d-flex align-items-center form-check">
                        <div className='me-5'>
                          <label className="form-check-label" htmlFor="paidForKara">Kevin</label>
                          <input
                              className="form-check-input"
                              type="checkbox"
                              value="Kara"
                              id="paidForKara"
                          />
                        </div>
                        <div className='ms-auto'>
                          <input
                            id="cost-for-kara"
                            type="text"
                            className="form-control bottom-border-only"
                            placeholder="13855"
                          />
                        </div>
                    </div>
                    <div className="d-flex align-items-center form-check">
                        <div className='me-5'>
                          <label className="form-check-label" htmlFor="paidForKara">Michelle</label>
                          <input
                              className="form-check-input"
                              type="checkbox"
                              value="Kara"
                              id="paidForKara"
                          />
                        </div>
                        <div className='ms-auto'>
                          <input
                            id="cost-for-kara"
                            type="text"
                            className="form-control bottom-border-only"
                            placeholder="13855"
                          />
                        </div>
                    </div>
                  </div>

                  {/* splitMethod select */}
                  <div className="col-md-4">
                    <label htmlFor="splitMethod" className="form-label">Split Method</label>
                    <Select 
                        id="split-method"
                        value=""
                        onChange=""
                        options={splitMethodOptions}
                        styles={selectedStyles}
                    />
                  </div> 
                
                </div>
              </section>

              {/* notes text input */}
              <section class="card">
                <div class="card-body">
                  <div className="col-12">
                      <label htmlFor="notes" className="form-label">Notes</label>
                      <textarea className="form-control" id="notes"></textarea>
                  </div>
                </div>
              </section>

              {/* submit form button */}
              <div className="d-flex align-items-center col-12">
                <button className="btn btn-primary me-3" type="submit">Create</button>
                <a href="index.html" className="text-decoration-none"><span className="me-2" type="submit">Cancel</span></a>
              </div>
          </form>
        </div>
    );
}