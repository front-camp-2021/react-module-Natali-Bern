import { useDispatch } from "react-redux";
import { GET_PAGINATION } from "../actions/paginationActions";

function Pages(props) {
  const { pages, active } = props;
  const dispatch = useDispatch();

  function paginationHadler(event) {
    dispatch({
      type: GET_PAGINATION,
      payload: +event.target.name
    })
  }

  return (
    <>
      <a
        className="pagination__link"
        id={active}
        href="/#"
        name={pages}
        onClick={paginationHadler}
      >
        {pages}
      </a>
    </>
  )
}

export default Pages;