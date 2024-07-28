export function CurrencySelect({ currencyNames, mainCurrency, mainCurrencyCallback }) {

    // set main currency for the trip
    function handleChange(event) {
        mainCurrencyCallback(event.target.value);
    }

    // populate currency select options
    const optionElems = Object.keys(currencyNames).map(currencyName => {
        return <option key={currencyName} selected={(currencyName === "USD")} value={currencyName}>{currencyName}: {currencyNames[currencyName]}</option>
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