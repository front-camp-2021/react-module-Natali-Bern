import './FiltersContainer.css';
import Chevrons from './chevrons-right.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllBrandFilters, getAllCategoryFilters } from '../../actions/filtersActions';
import Filter from './Filter';




function FiltersContainer() {
  const dispatch = useDispatch();
  const categoryFilters = useSelector(state => state.categoryFilters);
  const brandFilters = useSelector(state => state.brandFilters);


  useEffect(() => {
    dispatch(getAllCategoryFilters());
    dispatch(getAllBrandFilters());
  }, [])





    return (
        <>
        <div class="filters__container">
          <div className="filters__container-header">
            <h3 className="filters__container-title">Filters</h3>
            <button className="btn-white toggle__filters">
              <img src={Chevrons} />
            </button>
          </div>


          <div className="form__group">
            <h3 className="form__group-title">Category</h3>

            {/* {
            categoryFilters.map ((item, index) => {
              <Filter
                filtersListItem={item}
                type={'category'}
                key={index}
              />
            }
            )
          } */}
          </div>  
          
        
        <br />

        <div className="form__group">
          <h3 className="form__group-title">Brand</h3>
          {/* {
          brandFilters.map((item, index) =>
            <Filter
              filtersListItem={item}
              type={'brand'}
              key={index}
            />
          )
        } */}
        </div>

      </div>

      <button className="btn-primary clear__filters"
                    type="button">CLEAR ALL FILTERS</button>
                  
      </>
    )
}

export default FiltersContainer;