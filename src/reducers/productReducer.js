import {GET_PRODUCTS_SUCCESS} from '../actions/actions'

const initialState = {
    productList:[]
}

export const productReducer = (state=initialState, action) => {
    switch(action.type) {
        case GET_PRODUCTS_SUCCESS: {
            return state;
        }
        default: {
            return state;
        }
    }
}