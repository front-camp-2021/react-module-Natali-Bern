import Pagination from '../Pagination/Pagination';
import ProductList from '../ProductList';
import Search from '../Search/Search';
import Sidebar from '../Sidebar/Sidebar';
import './MainPage.css';

function MainPage() {
    return (
        <div className="container page-wrapper">
            <Sidebar />
            <div class="main">
                <Search />
                <ProductList />
                <Pagination />
            </div>
        </div>
    )
}

export default MainPage;