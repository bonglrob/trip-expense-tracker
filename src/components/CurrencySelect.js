import Select from 'react-select';

export function CurrencySelect({ currencyOptions, mainCurrencyCallback }) {

    // set main currency for the trip
    // example return: [{ value: "USD", label: "United States Dollar"}, { value: "KRW", label: "Korean Won"}]
    function handleChange({ value }) {
        mainCurrencyCallback(value);
    }

    // populate currency select options
    const options = Object.keys(currencyOptions).map((currencySymbol) => ({
        value: currencySymbol,
        label: `${currencySymbol} - ${currencyOptions[currencySymbol]}`,
    }));

    // styles for selected options 
    const selectedStyles = {
        option: (provided, state) => ({
          ...provided,
          backgroundColor: state.isSelected ? '#b3f1be' : state.isFocused ? '#d3e8d3' : null,
          color: state.isSelected ? '#181d18' : '#00210c',
        }),
        singleValue: (provided) => ({
          ...provided,
          color: '#333',
        }),
      };
    
    return (
        <>
            <label for="mainCurrency" className="form-label">Currency of Home Country</label>
            <Select 
                id="mainCurrency"
                defaultValue={options[29]}
                options={options}
                isSearchable
                onChange={handleChange}
                styles={selectedStyles}
                maxMenuHeight={140}
            />
        </>
    );
}