import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Select from 'react-select';
import _ from 'lodash';

export function CreateExpenseForm({ onSubmit, tripsDataArray }) {
  const { tripName } = useParams();
  const index = _.findIndex(tripsDataArray, { tripName: tripName });
  const { startDate, members, currency } = tripsDataArray[index];
  const currencies = [currency.main, ...currency.alt];

  const [paidByOptions, setPaidByOptions] = useState([]);
  const [currencyOptions, setCurrencyOptions] = useState([]);

  const [expenseFormData, setExpenseFormData] = useState({
    expenseId: 1,
    expenseName: "",
    expenseCategory: {},
    currency: {},
    cost: 0,
    date: "",
    paidByName: {},
    paidForNames: [],
    splitMethod: {},
    costPerName: []
  });
  console.log("DEBUG: paidForNames", expenseFormData.paidForNames);
  console.log("DEBUG: costPerName", expenseFormData.costPerName);
    
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

  useEffect(() => {
    const paidByOptionsArray = members.map(member => ({"value": member, "label": member}));
    setPaidByOptions(paidByOptionsArray);
  }, [members])

  useEffect(() => {
    const currencyOptionsArray = currencies.map(currency => ({
      value: currency,
      label: currency
    }))
    console.log(currencyOptionsArray);
    
    // setCurrencyOptions(currencyOptionsArray);
  }, [currencies])

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

  function handleSplitMethodChange(splitMethod) {
    const updatedExpenseFormData = { ...expenseFormData, "splitMethod": splitMethod }
    setExpenseFormData(updatedExpenseFormData);
  };

  // function handlePercentageChange(percent) {};

  function handleCheckboxChange(event) {
    const value = event.target.value;
    // let updatedExpenseFormData = {};
    
    if (event.target.checked) {
      let updatedExpenseFormData = { ...expenseFormData, "paidForNames": [...expenseFormData.paidForNames, value ] }
      setExpenseFormData(updatedExpenseFormData);
      
      // const constPerNameArray = expenseFormData.paidForNames.map((name) => {
      //   const costPerNameObj = { 
      //     [name]: (expenseFormData.cost / (expenseFormData.paidForNames.length)) 
      //   }
      //   return costPerNameObj;
      // });
      // updatedExpenseFormData = { ...expenseFormData, "costPerName": constPerNameArray }      
      // setExpenseFormData(updatedExpenseFormData);

    } else {
      const updatedPaidForNames = expenseFormData.paidForNames.filter((name) => name !== value);
      let updatedExpenseFormData = { ...expenseFormData, "paidForNames": updatedPaidForNames }
      setExpenseFormData(updatedExpenseFormData);

      // const constPerNameArray = expenseFormData.paidForNames.map((name) => {
      //   const costPerNameObj = { 
      //     [name]: (expenseFormData.cost / (expenseFormData.paidForNames.length)) 
      //   }
      //   return costPerNameObj;
      // });
      // updatedExpenseFormData = { ...expenseFormData, "costPerName": constPerNameArray } 
      // setExpenseFormData(updatedExpenseFormData); 
    }

    // setExpenseFormData(updatedExpenseFormData);
  }

  // function handleCostPerNameChange(event) {
  //   const { id, value } = event.target;
  //   const member = id.substring(9);
  //   const memberIndex = expenseFormData.paidForNames.indexOf(member);
  //   expenseFormData.constPerNameArray[memberIndex][member] = value;
  //   const updatedExpenseFormData = { ...expenseFormData, "costPerName": expenseFormData.constPerNameArray }
  //   setExpenseFormData(updatedExpenseFormData)
  // }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="container mt-4">
      <div className="d-flex align-items-center"><h1>New Expense</h1></div>

      <form id="create-expense" className="row g-3" onSubmit={handleSubmit}>

        <section class="card">
          <div class="card-body">
            <div class="row">

              {/* exepenseName input */}
              <ExpenseName expenseName={expenseFormData.expenseName} handleChange={handleChange}/>

              {/* date input */}
              <Date date={expenseFormData.date} handleChange={handleChange}/>

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

        <section class="card">
          <div className="card-body col-md-6">

            <h2 className='mb-3'>Paid for</h2>
            <PaidForInput 
              paidForNames={expenseFormData.paidForNames} 
              cost={expenseFormData.cost}
              splitMethod={expenseFormData.splitMethod}
              tripsDataArray={tripsDataArray} 
              handleChange={handleCheckboxChange}
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
        placeholder="Jajangmyeon Restaurant"
        required
      />
    </div>  
  );
}

// Component for Date input field
function Date({ date, handleChange }) {
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
            placeholder=""
          />
      </div>
    </div>  
  );
}

// Component for Expense Category input field
function ExpenseCategory({ expenseCategory, categoryOptions, selectedStyles, handleChange}) {
  return (
    <div className="col-md-4">
      <label htmlFor="expense-category" className="form-label">Category</label>
      <Select
          id="expense-category"
          value={expenseCategory}
          onChange={handleChange}
          options={categoryOptions}
          isSearchable
          styles={selectedStyles}
          maxMenuHeight={140}
      />
    </div>
  );
}

// Component for Currency and Cost input field
function Cost({currency, currencyOptions, selectedStyles, handleCurrencyChange, cost, handleCostChange }) {
  return (
    <div className="col-md-3">
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
          placeholder="0"
          required
        />
      </div>
    </div>
  );
}

function PaidForInput({ paidForNames, cost, splitMethod, tripsDataArray, handleChange,  }) { //handleCostPerNameChange
  const { tripName } = useParams();
  const index = _.findIndex(tripsDataArray, { tripName: tripName });
  const { members } = tripsDataArray[index];

  const paidForInputArray = members.map((member) => {
    const transformed = (
      <div className='row'>
        <div key={member} className='col py-1'>
          <label className="form-check-label" htmlFor={`paidFor${member}`}>{member}</label>
          <input
              id={`paid-for-${member}`}
              className="form-check-input"
              type="checkbox"
              value={member}
              onChange={handleChange}
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
          value={cost / paidForNames.length}
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