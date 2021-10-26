import { combineReducers} from 'redux';
import { productReducer } from './productReducer';
import { activeFiltersReducer } from "./checkboxReducer";
import { brandFiltersReducer, categoryFiltersReducer } from "./filterReducer";
// import { paginationReducer } from "./paginationReducer";

export const rootReducer = combineReducers({
    prodlist: productReducer,
    categoryFilters: categoryFiltersReducer,
    brandFilters: brandFiltersReducer,
    activeFilters: activeFiltersReducer,
    // pagination: paginationReducer
});