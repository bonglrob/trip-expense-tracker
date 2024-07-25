export default function CreateExpense() {
    return (
        <div class="container mt-4">
            <div class="d-flex align-items-center"><h1>New Expense</h1></div>

        {/* <!-- add expense form --> */}
        <form class="row g-3">
            <div class="col-md-4">
              <label for="expenseName" class="form-label">Name</label>
              <input type="text" class="form-control" id="expenseName" placeholder="Jajangmyeon Restaurant" required/>
            </div>

            {/* <!-- date select field --> */}
            <div class="col-md-4">
                <label for="date" class="form-label">Date</label>
                <div class="input-group" id="date">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="7/18/2024"/>
                    <span class="input-group-text">
                        <span class="material-symbols-outlined">calendar_today</span>
                    </span>
                </div>
            </div>

            {/* <!-- category dropdown --> */}
            <div class="col-md-3">
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
           
            {/* <!-- cost dropdown & input --> */}
            <div class="col-md-4">
              <label for="cost" class="form-label">Cost</label>
              <div class="input-group" id="cost">
                <label class="form-label" for="currencySelect"></label>
                <select class="form-select" id="currencySelect" aria-label="select currency">
                    <option value="₩" selected>WON ₩</option>
                    <option value="$">USD $</option>
                </select>
                <input type="text" class="form-control" placeholder="55,423" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
              </div>
            </div>

            {/* <!-- paid by dropdown --> */}
            <div class="col-md-3">
                <label for="paidBySelect" class="form-label">Paid by</label>
                <select class="form-select" id="paidBySelect" aria-label="select paid by">
                  <option selected value="Kara">Kara</option>
                  <option value="Josh">Josh</option>
                  <option value="Kevin">Kevin</option>
                  <option value="Michelle">Michelle</option>
                </select>
            </div>                

            {/* <!-- paid for checklist --> */}
            <div class="col-md-6">
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
                        aria-checked="true"
                        checked/>
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
                        aria-checked="true"
                        checked/>
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
                        aria-checked="true"
                        checked/>
                </div>
            </div>

            {/* <!-- notes text input --> */}
            <div class="col-12">
                <label for="notes" class="form-label">Notes</label>
                <textarea class="form-control" id="notes"></textarea>
            </div>

            {/* <!-- submit form button --> */}
            <div class="d-flex align-items-center col-12">
              <button class="btn btn-primary me-3" type="submit">Create</button>
              <a href="index.html" class="text-decoration-none"><span class="me-2" type="submit">Cancel</span></a>
            </div>
          </form>
    </div>
    );
}