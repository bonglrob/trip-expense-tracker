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
          backgroundColor: state.isSelected ? 'rgb(212 227 255)' : state.isFocused ? 'rgb(114, 163, 255)' : null,
          color: state.isSelected ? 'rgb(25 28 32)' : 'rgb(33 72 118)',
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