import axios from 'axios';

export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';

export const getProductsSuccess = (prodlist) => {
    return {
        type: GET_PRODUCTS_SUCCESS,
        payload: prodlist
    }
}

export const getProducts = () => {
    return (dispatch) => {
        axios.get(`http://localhost:3001/products`)
            .then(response => {
                dispatch(getProductsSuccess(response.data));
            })
    }
}