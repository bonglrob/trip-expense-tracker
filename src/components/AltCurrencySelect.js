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
            backgroundColor: state.isSelected ? 'rgb(212 227 255)' : state.isFocused ? 'rgb(114, 163, 255)' : null,
            color: state.isSelected ? 'rgb(25 28 32)' : 'rgb(33 72 118)',
        }),
        multiValue: (provided) => ({
            ...provided,
            backgroundColor: "rgb(114, 163, 255)",
        }),
        multiValueLabel: (provided) => ({
            ...provided,
            color: "rgb(33 72 118)",
        }),
        multiValueRemove: (provided) => ({
            ...provided,
            color: "rgb(33 72 118)",
            ":hover": {
                backgroundColor: "rgb(223, 234, 255)",
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