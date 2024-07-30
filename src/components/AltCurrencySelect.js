import Select from 'react-select';

export function AltCurrencySelect({ currencyOptions, altCurrencyCallback }) {

    // set alt currency for the trip
    function handleChange({ value }) {
        altCurrencyCallback(value);
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
            <label for="altCurrency" className="form-label">Currency of Visiting Country</label>
            <Select 
                id="altCurrency"
                defaultValue={options[17]}
                options={options}
                isSearchable
                onChange={handleChange}
                styles={selectedStyles}
                maxMenuHeight={140}
            />
        </>
    );
}