export function AltCurrencySelect({ currencyNames, altCurrency, altCurrencyCallback }) {

    // set alt currency for the trip
    function handleChange(event) {
        altCurrencyCallback(event.target.value);
    }

    // populate currency select options
    const optionElems = Object.keys(currencyNames).map(currencyName => {
        return <option key={currencyName} selected={(currencyName === "KRW")} value={currencyName}>{currencyName}: {currencyNames[currencyName]}</option>
    });
    
    return (
        <>
            <label for="altCurrency" className="form-label">Currency of Visiting Country</label>
            <select id="altCurrency" className="form-select" value={altCurrency} onChange={handleChange}>
                {optionElems}
            </select>
        </>
    );
}