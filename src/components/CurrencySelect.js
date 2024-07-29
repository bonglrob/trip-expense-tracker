export function CurrencySelect({ currencyOptions, mainCurrency, mainCurrencyCallback }) {

    // set main currency for the trip
    function handleChange(event) {
        mainCurrencyCallback(event.target.value);
    }

    // populate currency select options
    const optionElems = Object.keys(currencyOptions).map(currencyName => {
        return <option key={currencyName} selected={(currencyName === "USD")} value={currencyName}>{currencyName}: {currencyOptions[currencyName]}</option>
    });
    
    return (
        <>
            <label for="mainCurrency" className="form-label">Currency of Home Country</label>
            <select id="mainCurrency" className="form-select" value={mainCurrency} onChange={handleChange}>
                {optionElems}
            </select>
        </>
    );
}