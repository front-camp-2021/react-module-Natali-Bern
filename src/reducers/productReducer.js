import {GET_PRODUCTS_SUCCESS} from '../actions/actions'

const initialState = {
    productitem:[]
}

export const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_PRODUCTS_SUCCESS: {
            return {
                ...state, 
                productitem: action.payload
            }
        }
        default: {
            return state;
        }
    }
}