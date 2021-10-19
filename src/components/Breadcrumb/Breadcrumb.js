import './Breadcrumb.css';

function Breadcrumb() {
    return (
        <div className="breadcrumb">
                <ul className="breadcrumb__list">
                    <li class="breadcrumb__item">
                        <a className="breadcrumb__link" href="#"><i class="bi bi-house-door"></i>  
                        </a>
                        <i className="bi bi-chevron-right link-icon"></i>
                    </li>
    
                    <li className="breadcrumb__item">
                        <a className="breadcrumb__link"
                            href="#">eCommerce</a>
                            <i className="bi bi-chevron-right link-icon"></i>
                    </li>
    
                    <li className="breadcrumb__item">
                            <a className="breadcrumb__link"
                               href="#">Electronics</a>
                            <i className="bi bi-chevron-right link-icon"></i>
                    </li>
                </ul>
            </div>
    );
}

export default Breadcrumb;