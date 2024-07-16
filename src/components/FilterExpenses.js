export default function FilterExpenses() {
    return (
        <div class="container mt-4">
            <h1>Filters</h1>

            <div class="row">
                {/* <!-- paid for --> */}
                <div class="col-md-4">
                    <label for="paidFor" class="form-label">Paid for</label>
                    <div class="form-check" id="paidFor">
                        <label class="form-check-label" for="paidForKara">
                          Kara
                        </label>
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value="Kara"
                            id="paidForKara"
                            aria-checked="false"/>
                    </div>
                    <div class="form-check" id="paidFor">
                        <label class="form-check-label" for="paidForJosh">
                          Josh
                        </label>
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value="Josh"
                            id="paidForJosh"
                            aria-checked="false"/>
                    </div>
                    <div class="form-check" id="paidForKevin">
                        <label class="form-check-label" for="paidForKevin">
                          Kevin
                        </label>
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value="Kevin"
                            id="paidForKevin"
                            aria-checked="false"/>
                    </div>
                    <div class="form-check" id="paidFor">
                        <label class="form-check-label" for="paidForMichelle">
                          Michelle
                        </label>
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value="Michelle"
                            id="paidForMichelle"
                            aria-checked="false"/>
                    </div>
                </div>
    
                {/* <!-- paid by --> */}
                <div class="col-md-4">
                    <label for="paidFor" class="form-label">Paid for</label>
                    <div class="form-check" id="paidFor">
                        <label class="form-check-label" for="paidForKara">
                          Kara
                        </label>
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value="Kara"
                            id="paidForKara"
                            aria-checked="true"
                            checked/>
                    </div>
                    <div class="form-check" id="paidFor">
                        <label class="form-check-label" for="paidForJosh">
                          Josh
                        </label>
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value="Josh"
                            id="paidForJosh"
                            aria-checked="false"/>
                    </div>
                    <div class="form-check" id="paidForKevin">
                        <label class="form-check-label" for="paidForKevin">
                          Kevin
                        </label>
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value="Kevin"
                            id="paidForKevin"
                            aria-checked="false"/>
                    </div>
                    <div class="form-check" id="paidFor">
                        <label class="form-check-label" for="paidForMichelle">
                          Michelle
                        </label>
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value="Michelle"
                            id="paidForMichelle"
                            aria-checked="false"/>
                    </div>
                </div>

                {/* <!-- date filter --> */}
                <div class="col-md-5 mb-4">
                    <label for="date" class="form-label">Date</label>
                    <div class="input-group" id="date">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="7/12/2024 - 7/18/2024"/>
                        <span class="input-group-text">
                            <icon class="material-symbols-outlined">calendar_today</icon>
                        </span>
                    </div>
                </div>

                {/* <!-- category select --> */}
                <div class="col-md-3 mb-4">
                    <label for="categorySelect" class="form-label">Category</label>
                    <select class="form-select" id="categorySelect" aria-label="select category">
                      <option disabled value="">Choose...</option>
                      <option selected value="Food & Drink">Food & Drinks</option>
                      <option value="Hotel & Lodging">Hotel & Lodging</option>
                      <option value="Flight">Flight</option>
                      <option value="Transportation">Transportation</option>
                      <option value="Entertainment">Entertainment</option>
                      <option value="Other">Other</option>
                    </select>
                </div>     

                {/* <!-- apply filters button --> */}
                <div class="d-flex justify-content-end align-items-center col-12">
                    <button class="btn btn-primary me-2" type="submit">Apply</button>
                    <button class="btn btn-primary me-2" type="submit">Clear</button>
                    <a href="index.html"><span class="me-2" type="submit">Cancel</span></a>
                </div>
            </div>
         </div>
    )
}