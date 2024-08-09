import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Select from 'react-select';
import _ from 'lodash';
import { useNavigate } from 'react-router-dom';

export function CreateExpenseForm({ onSubmit, tripsDataArray, expensesData, highestId }) {
  
  // Todo: If params expenseId === tripsDataArray[tripName] / .expenseId exists (use _.find?)

  const navigate = useNavigate();

  const { tripName, expenseId } = useParams();  

  const index = _.findIndex(tripsDataArray, { tripName: tripName });
  const { startDate, members, currency } = tripsDataArray[index];
  const [currencies, setCurrencies] = useState([currency.main, ...currency.alt]);

  const [paidByOptions, setPaidByOptions] = useState([]);
  const [currencyOptions, setCurrencyOptions] = useState([]);  

  const [expenseFormData, setExpenseFormData] = useState({
    expenseId: 1,
    expenseName: "",
    expenseCategory: {},
    currency: {},
    cost: 0,
    date: "", // should be set to today's date
    paidByName: {},
    paidForNames: [],
    splitMethod: {},
    costPerName: []
  });
    
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

  const [expenseIsFound, setExpenseIsFound] = useState(false);
  // console.log("expenseFound", expenseIsFound);
  

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

  // Returns boolean if expenseId in URL params exists in expenses database 
  function findExpenseId() {
    const arrayOfExpenses = _.flatMap(expensesData[tripName], (expense) => expense); // flattens expensesDataObj to array
    const expenseIsFound = _.find(arrayOfExpenses, { "expenseId": Number(expenseId) })    
    setExpenseIsFound(!!expenseIsFound);  
  }

  function handleSubmit(event) {
    event.preventDefault();

    onSubmit(expenseFormData);

    navigate(`/expenses/${tripName}`)
  }

  useEffect(() => {
    const paidByOptionsArray = members.map(member => ({"value": member, "label": member}));
    setPaidByOptions(paidByOptionsArray);
    findExpenseId();
  }, [expensesData])

  useEffect(() => {
    const currencyOptionsArray = currencies.map(currency => ({
      value: currency.value,
      label: currency.value
    }))
    setCurrencyOptions(currencyOptionsArray);
  }, [currencies])
    
  return (
    Number(expenseId) > highestId + 1 || !expenseIsFound
    ? <h2>This expense has not yet been created!</h2>
    : (
    <div className="container mt-4">
      <div className="d-flex align-items-center"><h1>New Expense</h1></div>

      <form id="create-expense" className="row g-3" onSubmit={handleSubmit}>

        <section className="card">
          <div className="card-body">
            <div className="row">

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
              <div className="col col-md-2">
                <label htmlFor="paid-by" className="form-label">Paid by</label>
                  <Select
                    id="paid-by"
                    value=""
                    onChange=""
                    options={paidByOptions}
                    styles={selectedStyles}
                  />
              </div>

            </div>
          </div>
        </section>   

        <section className="card">
          <div className="card-body col-md-6">

            <h2 className='mb-3'>Paid for</h2>
            <PaidForInput tripsDataArray={tripsDataArray}/>

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
        {/* <section class="card">
          <div class="card-body">
            <div className="col-12">
                <label htmlFor="notes" className="form-label">Notes</label>
                <textarea className="form-control" id="notes"></textarea>
            </div>
          </div>
        </section> */}

        {/* submit form button */}
        <div className="d-flex align-items-center col-12">
          <button className="btn btn-primary me-3" type="submit">Create</button>
          <a href="index.html" className="text-decoration-none"><span className="me-2" type="submit">Cancel</span></a>
        </div>

      </form>

    </div>
    )
  );
}

function PaidForInput({ tripsDataArray }) {
  const { tripName } = useParams();
  const index = _.findIndex(tripsDataArray, { tripName: tripName });
  const { members } = tripsDataArray[index];

  const paidForInputArray = members.map((member) => {
    const transformed = (
      <div key={member} className='row'>
        <div key={member} className='col'>
          <label className="form-check-label" htmlFor={`paidFor${member}`}>{member}</label>
          <input
              id={`paid-for-${member}`}
              className="form-check-input"
              type="checkbox"
              value={member}
          />
          </div>
          <div className='col'>
            <input
              id={`cost-for-${member}`}
              type="text"
              className="form-control bottom-border-only"
              placeholder="13855"
            />
        </div>
      </div>
    );
    return transformed;
  })

  return (
      <div className="form-check mb-4">
        {paidForInputArray}
      </div>
  )
}