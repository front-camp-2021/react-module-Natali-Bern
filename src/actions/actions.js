import axios from "axios";

export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';

export const getProductsSuccess = (products) => {
    return {
        type: GET_PRODUCTS_SUCCESS,
        payload: products
    }
}

export const getProducts = () => {
    return (dispatch) => {
        axios.get('http://localhost:3001/products')
            .then(res => {
                dispatch(getProductsSuccess(res.data));
            })
    }
}