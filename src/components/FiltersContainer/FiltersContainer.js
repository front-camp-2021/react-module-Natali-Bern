import './FiltersContainer.css';
import Chevrons from './chevrons-right.svg';


function FiltersContainer() {
    return (
        <>
        <div class="filters__container">
        <div className="filters__container-header">
            <h3 className="filters__container-title">Filters</h3>
            <button className="btn-white toggle__filters">
              <img src={Chevrons} />
            </button>
        </div>
        <form className="filters__container-content">
        <div className="form__group-wrap">
        <div className="form__group">
            <h3 className="form__group-title">Multi Range</h3>
            <div className="filters__container-item">
                <div className="form__radio">
                    <input id="$10"
                           type="radio"
                           name="multi-range" />
                    <label for="$10">$10</label>
                  </div>
            </div>
        

            <div className="filters__container-item">
                <div className="form__radio">
                    <input id="$10"
                           type="radio"
                           name="multi-range" />
                    <label for="$10">$10-$100</label>
                  </div>
            </div>

            <div className="filters__container-item">
                <div className="form__radio">
                    <input id="$10"
                           type="radio"
                           name="multi-range" />
                    <label for="$10">All</label>
                  </div>
            </div>

        </div>

        <div className="form__group">
                <h3 className="form__group-title">Category</h3>

                <div className="filters__container-item">
                    <div className="form__checkbox">
                      <input id="cell-phones"
                             type="checkbox" />
                      <label for="cell-phones">
                        <span>Cell Phones</span>
                      </label>
                    </div>
                    <span className="amount">1920</span>
                  </div>

                  <div className="filters__container-item">
                    <div className="form__checkbox">
                      <input id="computers-tablets"
                             type="checkbox" />
                      <label for="cell-phones">
                        <span>Computers  Tablets</span>
                      </label>
                    </div>
                    <span className="amount">1820</span>
                  </div>
        </div>
        <div className="form__group">
                <h3 className="form__group-title">Brand</h3>
                <div className="filters__container-item">
                    <div className="form__checkbox">
                        <input id="apple"
                        type="checkbox" />
                        <label for="apple">
                        <span className="overflow__text-hidden">Apple</span>
                        </label>
                    </div>
                    <span className="amount">320</span>
                </div>

                <div className="filters__container-item">
                    <div className="form__checkbox">
                        <input id="samsung"
                        type="checkbox" />
                        <label for="samsung">
                        <span className="overflow__text-hidden">Samsung</span>
                        </label>
                    </div>
                    <span className="amount">320</span>
                </div>

        </div>
        </div>
      </form>
      </div>
      <button className="btn-primary clear__filters"
                    type="button">CLEAR ALL FILTERS</button>
                  
      </>
    )
}

export default FiltersContainer;