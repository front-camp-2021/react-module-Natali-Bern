import './ProductList.css';
import ProductCard from "./../ProductCard";
import { getProducts } from '../../actions/actions';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function ProductList (props) {
    //  const {prodlist} = props;
    const dispatch = useDispatch();
    const prodlist = useSelector((state) => state.prodlist.productitem);
    

    useEffect(() => {
        dispatch(getProducts());
        
    }, [])

    return (
        <>
        <h1>Product</h1>
        <div className="product-list">
            {
                prodlist.map(productitem => {
                    return (
                    <ProductCard item={productitem} />
                    )
                })
            }
            
        </div>
        </>
    )
}

export default ProductList;