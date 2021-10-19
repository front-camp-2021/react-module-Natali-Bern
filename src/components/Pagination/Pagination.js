import './Pagination.css';

function Pagination() {
    return (
        
        <div className="pagination">
                <a className="pagination__link pagination__prev" href="#">&laquo;</a>

                <div className="pagination__group">
                    <a className="pagination__link" href="#">1</a>
                    <a className="pagination__link pagination__link_active" href="#">2</a>
                    <a className="pagination__link" href="#">3</a>
                    <a className="pagination__link" href="#">4</a>
                    <a className="pagination__link" href="#">5</a>
                    <a className="pagination__link" href="#">6</a>
                </div>
                <a className="pagination__link pagination__next" href="#">&raquo;</a>
            </div> 
        
    );
}

export default Pagination;