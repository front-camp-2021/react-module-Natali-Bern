import { useDispatch } from "react-redux";
import { isSearchedStatus } from "../../redux/isSearchedSlice";
import { setElements } from "../../redux/paginationSlice";
import { setUserInput } from "../../redux/searchInputSlice";

function Search() {
  const dispatch = useDispatch();

  function handleSearchInput(event) {
    dispatch(
      isSearchedStatus({
        isSearchedStatus: true
      })
    );
    dispatch(
      setUserInput({
        userInput: event.target.value
      })
    )
    dispatch(
      setElements({
        indexesAndActivePage: [0, 9, 1]
      })
    );

  }

  return (
    <div className="search">
      <input
        className="search__input"
        placeholder="Search"
        onChange={handleSearchInput}
      ></input>
    </div>
  );
}





export default Search;