import Select from 'react-select';

export function AltCurrencySelect({ altCurrency, currencyOptions, handleChange }) {

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
        multiValue: (provided) => ({
            ...provided,
            backgroundColor: "#d3e8d3",
        }),
        multiValueLabel: (provided) => ({
            ...provided,
            color: "#0e1f12",
        }),
        multiValueRemove: (provided) => ({
            ...provided,
            color: "#0e1f12",
            ":hover": {
                backgroundColor: "#bdf3c6",
            },
        }),
    };
    
    return (
        <>
            <label htmlFor="altCurrency" className="form-label">Currency of Visiting Countries</label>
            <Select 
                id="altCurrency"
                value={altCurrency}
                onChange={handleChange}
                options={options}
                isSearchable
                isMulti
                styles={selectedStyles}
                maxMenuHeight={140}
            />
        </>
    );
}