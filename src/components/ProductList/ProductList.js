import './ProductList.css';
import ProductCard from "./../ProductCard";


function ProductList () {
    return (
        <>
        <h1>Product</h1>
        <div className="product-list">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
        </>
    )
}

export default ProductList;