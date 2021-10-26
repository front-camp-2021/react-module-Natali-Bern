import { useDispatch, useSelector} from "react-redux";
import './FiltersContainer.css';
import { SET_FILTER } from '../../actions/checkboxAction';


function Filter(props) {
    const { filtersListItem } = props;
    const dispath = useDispatch();
    const checkedLength = useSelector(state => state.activeFilters[props.type].length);
    let checked;
  
    function filterHandler(e) {
      dispath({
        type: SET_FILTER,
        payload: {
          name: e.target.name.toLowerCase().replace(' ', '_'),
          type: props.type
        }
      });
    }
  
    if (checkedLength === 0){
      checked = '';
    }


return (
    <form 
    className="filters__container-content"
        action=""
        method="GET"
        name="category"
    >
     <div className="form__group-wrap"> 
        <div className="form__group">
            <div className="filters__container-item">
                <div className="form__checkbox">


                  <input 
                    id="cell-phones"
                    type="checkbox"
                    checked={checked}
                    id={filtersListItem}
                    name={filtersListItem}
                    onChange={filterHandler} 
                    />

                  <label 
                  htmlFor={filtersListItem}>
                      {filtersListItem}
                  </label>
                  <br />
                </div>
            </div>
        </div>

    </div>
  </form>
)
}


export default Filter;