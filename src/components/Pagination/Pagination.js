import './Pagination.css';
// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pages from '../Pages';
import { TO_NEXT, TO_PREV } from '../../actions/paginationActions';

function Pagination() {

    const pages = useSelector(state => state.pagination);
    const dispatch = useDispatch();

    const pagesArray = [];

//   for (let i = 0; i < pages.totalPage; i++) {
//     pagesArray.push(i + 1);
//   }

  function toNextHandler() {
    dispatch({
      type: TO_NEXT
    })
  }

  function toPrevHandler() {
    dispatch({
      type: TO_PREV
    })
  }








    return (
        
        <div className="pagination">
                <a className="pagination__link pagination__prev" href="#" onClick={toPrevHandler}>&laquo;</a>

                <div className="pagination__group">
                {pagesArray.map((item, index) =>

                    <Pages
                        page={item}
                        key={index}
                        active={pages.currentPage == item ? 'active' : ""}
                    />
                )}
                    <a className="pagination__link" href="#">1</a>
                    <a className="pagination__link pagination__link_active" href="#">2</a>
                    <a className="pagination__link" href="#">3</a>
                    <a className="pagination__link" href="#">4</a>
                    <a className="pagination__link" href="#">5</a>
                    <a className="pagination__link" href="#">6</a> 
                </div>
                <a className="pagination__link pagination__next" href="#" onClick={toNextHandler}>&raquo;</a>
            </div> 
        
    );
}

export default Pagination;