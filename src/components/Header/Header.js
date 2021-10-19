import './Header.css';
import Logo from './logo.svg';
import Breadcrumb from '../Breadcrumb/Breadcrumb';

function Header() {
    return (
        
        <header class="header">
        <div class="container">
        <header className="header">
                <div className="header__logo">
                    <img class="header__logo-img" src={Logo}/>
                    <span className="header__logo-text">
                        Online Store
                    </span>
                </div>
        </header>
        <Breadcrumb />
        </div>
        </header>
    )
}

export default Header;