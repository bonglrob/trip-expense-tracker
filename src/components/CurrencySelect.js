import Select from 'react-select';

export function CurrencySelect({ mainCurrency, currencyOptions, handleChange }) {

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
        })
      };
    
    return (
        <>
            <label htmlFor="mainCurrency" className="form-label">Currency of Home Country</label>
            <Select 
                id="mainCurrency"
                value={mainCurrency}
                onChange={handleChange}
                options={options}
                isSearchable
                styles={selectedStyles}
                maxMenuHeight={140}
            />
        </>
    );
}