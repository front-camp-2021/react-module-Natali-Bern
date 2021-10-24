import axios from 'axios';
import { useEffect, useState } from 'react';
import Pagination from '../Pagination/Pagination';
import ProductList from '../ProductList';
import Search from '../Search/Search';
import Sidebar from '../Sidebar/Sidebar';
import './MainPage.css';

const initProducts = [{
    "id": "76w0hz7015kkr9kjkav",
    "images": [
        "https://content2.rozetka.com.ua/goods/images/big_tile/163399632.jpg",
        "https://content.rozetka.com.ua/goods/images/big_tile/163399633.jpg"
    ],
    "title": "Ноутбук Acer Aspire 3 A315-57G-336G (NX.HZREU.01S) Charcoal Black",
    "rating": 2.89,
    "price": 15999,
    "category": "laptops",
    "brand": "acer"
},
{
    "id": "qeagrlm9lrkr9kjkav",
    "images": [
        "https://content1.rozetka.com.ua/goods/images/big_tile/178060622.jpg",
        "https://content2.rozetka.com.ua/goods/images/big_tile/178060625.jpg"
    ],
    "title": "Ноутбук Acer Aspire 7 A715-41G-R9KP (NH.Q8QEU.00L) Charcoal Black",
    "rating": 1.96,
    "price": 21500,
    "category": "laptops",
    "brand": "acer"
},
{
    "id": "0y9ksratv6akr9kjkav",
    "images": [
        "https://content2.rozetka.com.ua/goods/images/big_tile/178060660.jpg",
        "https://content1.rozetka.com.ua/goods/images/big_tile/178060662.jpg"
    ],
    "title": "Ноутбук Acer Aspire 7 A715-75G-51ZW (NH.Q88EU.00P) Charcoal Black",
    "rating": 2.42,
    "price": 22999,
    "category": "laptops",
    "brand": "acer"
},];

function MainPage() {
    const [products, setProducts] = useState(initProducts);

    useEffect(() => {
        axios.get('http://localhost:3001/products')
            .then(res => setProducts(res.data))
    }, [])

    return (
        <div className="container page-wrapper">
            <Sidebar />
            <div class="main">
                <Search />
                <ProductList prodlist={products} />
                <Pagination />
            </div>
        </div>
    )
}

export default MainPage;