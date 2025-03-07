import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Select from 'react-select';
import _ from 'lodash';
import { useNavigate } from 'react-router-dom';

import { ConfirmDeleteModal } from './ConfirmDeleteModal.js';

export function CreateExpenseForm({ onSubmit, tripsDataArray, expensesData, highestId, deleteExpense }) {
  
  const navigate = useNavigate();

  const { tripName, expenseId } = useParams();  

  const index = _.findIndex(tripsDataArray, { tripName: tripName });
  const { members, currency } = tripsDataArray[index];
  const [currencies, setCurrencies] = useState([currency.main, ...currency.alt]);  

  const [paidByOptions, setPaidByOptions] = useState([]);
  const [currencyOptions, setCurrencyOptions] = useState([]);  

  const [showModal, setShowModal] = useState(false);

  const [expenseFormData, setExpenseFormData] = useState({
    expenseId: "",
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

  // console.log("DEBUG: paidForNames", expenseFormData.paidForNames);
  // console.log("DEBUG: costPerName", expenseFormData.costPerName);
  // console.log("DEBUG: splitMethod", expenseFormData.splitMethod);
  
    
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
    // { "value": "By Percentage", "label": "By Percentage" },
    // { "value": "By amount", "label": "By amount" }
  ]

  const [hasExpense, setHasExpense] = useState(false);
  
  const [showNewForm, setShowNewForm] = useState(false);  

  const [hasChecked, setHasChecked] = useState({});

  // styles for <Select> category options 
  const selectedStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? 'rgb(212 227 255)' : state.isFocused ? 'rgb(114, 163, 255)' : null,
      color: state.isSelected ? 'rgb(25 28 32)' : 'rgb(33 72 118)',
    })
  };

  // styles for <Select> currency options 
  const selectedCurrencyStyles = {
    container: (provided) => ({
      ...provided,
      width: "110px"
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
      backgroundColor: state.isSelected ? 'rgb(212 227 255)' : state.isFocused ? 'rgb(114, 163, 255)' : null,
      color: state.isSelected ? 'rgb(25 28 32)' : 'rgb(33 72 118)',
    })
  };

  // handles text input
  function handleChange(event) {
    const { name, value } = event.target;

    const updatedExpenseFormData = { ...expenseFormData, [name]: value }
    setExpenseFormData(updatedExpenseFormData);
  };

  function handleCategoryChange(expenseCategory) {
    const updatedExpenseFormData = { ...expenseFormData, "expenseCategory": expenseCategory }
    setExpenseFormData(updatedExpenseFormData);
  };

  function handleCurrencyChange(currency) {
    const updatedExpenseFormData = { ...expenseFormData, "currency": currency }
    setExpenseFormData(updatedExpenseFormData);
  };

  function handlePaidByChange(paidByName) {
    const updatedExpenseFormData = { ...expenseFormData, "paidByName": paidByName }
    setExpenseFormData(updatedExpenseFormData);
  };

  // Returns boolean if expenseId in URL params exists in expenses database 
  function findExpenseId() {
    const arrayOfExpenses = _.flatMap(expensesData[tripName], (expense) => expense); // flattens expensesDataObj to array
    let expense = _.find(arrayOfExpenses, { "expenseId": Number(expenseId) })    
    
    let expenseIsFound = !!expense;    

    // allows users to access new expense form
    if (Number(expenseId) === highestId + 1) {
      setShowNewForm(true);
    } else {
      setShowNewForm(false);
    }
    setHasExpense(expenseIsFound);  
    return expense;
  }

  function handleSplitMethodChange(splitMethod) {
    const updatedExpenseFormData = { ...expenseFormData, "splitMethod": splitMethod }
    setExpenseFormData(updatedExpenseFormData);
  };

  // function handlePercentageChange(percent) {};

  function handleCheckboxChange(event) {
    const { name, value, checked } = event.target;
    let updatedExpenseFormData = {};

    setHasChecked((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
    
    if (checked) {
      updatedExpenseFormData = { ...expenseFormData, "paidForNames": [...expenseFormData.paidForNames, value ] };

    } else {
      const updatedPaidForNames = expenseFormData.paidForNames.filter((name) => name !== value);
      updatedExpenseFormData = { ...expenseFormData, "paidForNames": updatedPaidForNames };
    }
    
    const constPerNameArray = updatedExpenseFormData.paidForNames.map((name) => {
      const costPerNameObj = { 
        [name]: (updatedExpenseFormData.cost / (updatedExpenseFormData.paidForNames.length)) 
      }
      return costPerNameObj;
    });
    // console.log("pfn:", updatedExpenseFormData.paidForNames)
    // console.log("costPerNameArray:", constPerNameArray)
    updatedExpenseFormData = { ...updatedExpenseFormData, "costPerName": constPerNameArray }

    setExpenseFormData(updatedExpenseFormData);
  }


  function handleSubmit(event) {
    event.preventDefault();

    // give the latest expenseId to new expense
    let updatedExpenseFormData = { ...expenseFormData };
    if (expenseId === highestId + 1) {
      updatedExpenseFormData = { ...expenseFormData, expenseId: highestId + 1 };
    }

    console.log("expenseId is", expenseId);
    console.log("highestId is", highestId);
    

    onSubmit(updatedExpenseFormData, tripName, hasExpense);

    navigate(`/${tripName}/expenses`);
  }

  function handleDeleteClick() {
    setShowModal(true);
  }

  function handleClose() {
    setShowModal(false);
  }

  function handleConfirm(event) {
    event.preventDefault();

    deleteExpense(tripName, expenseId);

    setShowModal(false);
    
    navigate(`/${tripName}/expenses`);
  };

  useEffect(() => {
    const paidByOptionsArray = members.map(member => ({"value": member, "label": member}));
    setPaidByOptions(paidByOptionsArray);
    findExpenseId();    
  }, [expensesData]);

  useEffect(() => {
    if (hasExpense) {
      const currentExpense = expensesData[tripName].filter(expense => expense.expenseId === Number(expenseId))[0];
      setExpenseFormData(currentExpense);

      const updatedInputs = currentExpense.paidForNames.reduce((acc, member) => {
        acc[member] = true;
        return acc;
      }, {});
      setHasChecked(updatedInputs);
    }
  }, [hasExpense]);

  useEffect(() => {
    const currencyOptionsArray = currencies.map(currency => ({
      value: currency.value,
      label: currency.value
    }))
    setCurrencyOptions(currencyOptionsArray);
  }, [currencies])
    
  return (
    (!hasExpense && !showNewForm) ? (
       <h2>This expense has not yet been created!</h2>
    ) : (
    <div className="container mt-4">
      <div className="d-flex align-items-center"><h1>{hasExpense ? "Edit Expense" : "New Expense"}</h1></div>

      <form id="create-expense" className="row g-3" onSubmit={handleSubmit}>

        <section className="card">
          <div className="card-body">
            <div className="row">

              {/* exepenseName input */}
              <ExpenseName expenseName={expenseFormData.expenseName} handleChange={handleChange} />

              {/* date input */}
              <Date date={expenseFormData.date} handleChange={handleChange} />

              {/* <!-- expenseCategory dropdown --> */}
              <ExpenseCategory 
                expenseCategory={expenseFormData.expenseCategory} 
                categoryOptions={categoryOptions} 
                selectedStyles={selectedStyles}
                handleChange={handleCategoryChange}
              />

              {/* cost input */}
              <Cost 
                currency={expenseFormData.currency} 
                currencyOptions={currencyOptions} 
                selectedStyles={selectedCurrencyStyles}
                handleCurrencyChange={handleCurrencyChange}

                cost={expenseFormData.cost} 
                handleCostChange={handleChange}
              />
              
              {/* paidByName select */}
              <div className="col col-md-2">
                <label htmlFor="paid-by" className="form-label">Paid by</label>
                  <Select
                    id="paid-by"
                    value={expenseFormData.paidByName}
                    onChange={handlePaidByChange}
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
            <PaidForInput 
              paidForNames={expenseFormData.paidForNames} 
              cost={expenseFormData.cost}
              splitMethod={expenseFormData.splitMethod}
              tripsDataArray={tripsDataArray} 
              handleChange={handleCheckboxChange}
              hasChecked={hasChecked}
              // handleCostPerNameChange={handleCostPerNameChange}
              // percent="0-100%"
              // handlePercentageChange={handlePercentageChange}
            />

            {/* splitMethod select */}
            <div className="col-md-4">
              <label htmlFor="splitMethod" className="form-label">Split Method</label>
              <Select 
                  id="split-method"
                  value={expenseFormData.splitMethod}
                  onChange={handleSplitMethodChange}
                  options={splitMethodOptions}
                  styles={selectedStyles}
              />
            </div> 
          
          </div>
        </section>

        {/* notes text input */}
        {/* <section className="card">
          <div className="card-body">
            <div className="col-12">
                <label htmlFor="notes" className="form-label">Notes</label>
                <textarea className="form-control" id="notes"></textarea>
            </div>
          </div>
        </section> */}

        {/* submit form button */}
        <div className="d-flex align-items-center col-12">
          <button className="btn btn-primary me-3" type="submit">{hasExpense ? "Save Changes" : "Create"}</button>
          <Link to={`/${tripName}/expenses`} className="text-decoration-none btn btn-secondary me-3">Cancel</Link>
          {hasExpense && (
            <div className="d-flex">
              <span className="material-symbols-outlined color-error cursor-pointer fs-2" onClick={handleDeleteClick}>delete</span>

              <ConfirmDeleteModal
                show={showModal}
                handleClose={handleClose}
                handleConfirm={handleConfirm}
              />
            </div>
          )}
        </div>

      </form>

    </div>
    )
  );
}


//   expenseId: 1,         //
//   expenseName: "",      // done
//   expenseCategory: {},  // done
//   currency: {},         //
//   cost: 0,              // done
//   date: "",             // done
//   paidByName: {},       // done
//   paidForNames: [],     // done
//   splitMethod: {},      // done
//   costPerName: []       //


// Component for Expense Name input field
function ExpenseName({ expenseName, handleChange }) {
  return (
    <div className="col-md-4">
      <label htmlFor="expense-name" className="form-label">Name</label>
      <input
        id="expense-name"
        name="expenseName"
        value={expenseName}
        onChange={handleChange}
        type="text"
        className="form-control"
        placeholder="Name of expense"
        required
      />
    </div>  
  );
}

// Component for Date input field
function Date({ date, handleChange, startDate }) {
  return (
    <div className="col-md-4">
      <label htmlFor="date" className="form-label">Date</label>
      <div className="input-group">
          <input
            id="date"
            name="date"
            value={date}
            onChange={handleChange}
            type="date"
            className="form-control"
            placeholder={startDate}
          />
      </div>
    </div>  
  );
}

// Component for Expense Category input field
function ExpenseCategory({ expenseCategory, categoryOptions, selectedStyles, handleChange }) {
  return (
    <div className="col-md-4">
      <label htmlFor="expense-category" className="form-label">Category</label>
      <Select
          id="expense-category"
          value={expenseCategory}
          onChange={handleChange}
          options={categoryOptions}
          placeholder="Select a category"
          isSearchable
          styles={selectedStyles}
          maxMenuHeight={140}
      />
    </div>
  );
}

// Component for Currency and Cost input field
function Cost({ currency, currencyOptions, selectedStyles, handleCurrencyChange, cost, handleCostChange }) {
  return (
    <div className="col-3">
      <label htmlFor="cost" className="form-label">Cost</label>
      <div className="input-group">
        <Select
          id="currency"
          value={currency}
          onChange={handleCurrencyChange}
          options={currencyOptions}
          styles={selectedStyles}
          maxMenuHeight={140}
          aria-label="currency selector"
        />
        <input
          id="cost"
          name="cost"
          value={cost}
          onChange={handleCostChange}
          type="text"
          className="form-control"
          placeholder="0.00"
          required
        />
      </div>
    </div>
  );
}

function PaidForInput({ paidForNames, cost, splitMethod, tripsDataArray, handleChange, hasChecked }) { //handleCostPerNameChange
  const { tripName } = useParams();
  const index = _.findIndex(tripsDataArray, { tripName: tripName });
  const { members } = tripsDataArray[index];

  const paidForInputArray = members.map((member) => {
    const transformed = (
      <div key={member} className='row'>
        <div key={member} className='col py-1'>
          <label className="form-check-label" htmlFor={`paidFor${member}`}>{member}</label>
          <input
              id={`paid-for-${member}`}
              name={member}
              className="form-check-input"
              type="checkbox"
              value={member}
              onChange={handleChange}
              checked={hasChecked[member]}
          />
          </div>
          <div className='col'>
            <CostForMemberInput 
              member={member} 
              paidForNames={paidForNames} 
              cost={cost} 
              splitMethod={splitMethod} 
              // handleChange={handleCostPerNameChange}  
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

function CostForMemberInput({ paidForNames, splitMethod, cost, member, handleChange }) {   // , percent, handlePercentageChange 
  if (paidForNames.includes(member)) {

    if (splitMethod.value === "Evenly") {
      return (
        <input
          id={`cost-for-${member}`}
          type="text"
          className="form-control bottom-border-only"
          value={(cost / paidForNames.length).toFixed(2)}
          // onChange={handleChange}
          readOnly
        /> 
      );
    } 

    // if (splitMethod.value === "By Percentage") {
    //   return (
    //     <input
    //       id={`cost-for-${member}`}
    //       type="text"
    //       className="form-control bottom-border-only"
    //       placeholder={percent}
    //       required
    //       value=""
    //       onChange={handlePercentageChange}
    //     /> 
    //   );
    // }

  }
}