export default function SearchBar() {
    return (
        <form role="search">
        <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text"><span className="material-symbols-outlined">search</span></span>
            </div>
            <input className="form-control" type="search" placeholder="Search for expenses" aria-label="Search"/>
        </div>
    </form>
    )
}
