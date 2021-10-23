import './ProductList.css';
import ProductCard from "./../ProductCard";


function ProductList (props) {
    const {prodlist} = props;

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