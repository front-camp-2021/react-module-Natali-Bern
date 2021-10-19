import './Search.css';

function Search () {
    return (
        <>
        <div className="product__search">
        <h3 className="products__search-title">7,618 results found</h3>

        <button className="products__search-btn">
            <i class="bi bi-heart wish-icon"></i>
        </button>
    </div>
    <form>
        <div className="form__search-input use-icon">
          <input className="search-input" id="search-input"
                 type="text"
                 placeholder="Search" />
          <label className="bi bi-search input-icon"
                 for="search-input"></label>
        </div>
      </form>
      </>
    );
}



export default Search