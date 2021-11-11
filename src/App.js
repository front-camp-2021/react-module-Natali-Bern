import FiltersContainer from "./components/FiltersContainer/FiltersContainer";
import ProductList from "./components/ProductList/ProductList";
import Pagination from "./components/Pagination/Pagination";
import Header from "./components/Header/Header";
import Breadcrumbs from "./components/Breadcrumb/Breadcrumb";
import Main from "./components/Main/Main";
import Wishlist from "./components/WishList/WishList";
import Page from "./components/Page/Page";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { filterData } from "./helpers/filterLogic";
import { filterWishlistItems } from "./helpers/filtersWishlistItems";
import { useEffect } from "react";
import { getCardData } from "./redux/cardDataSlice";
import { filterUserInput } from "./helpers/filterUserInput";

function App() {
  const { categories, brands, wishlist } = useSelector((state) => state);

  const activeItem = useSelector((state) => state.itempage)[
    useSelector((state) => state.itempage).length - 1
  ];
  const cardsData = useSelector((state) => state.cardsData)[
    useSelector((state) => state.cardsData).length - 1
  ];
  const searchInput = useSelector((state) => state.searchInput)[
    useSelector((state) => state.searchInput).length - 1
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCardData());
  }, [dispatch]);

  let isFiltered = categories.length > 0 || brands.length > 0;

  return (
    <div className="App">
      <Header />
      <Router>
        <Breadcrumbs />
        <Switch>
          <Route exact path="/">
            {Boolean(cardsData) && (
              <>
                <Main
                  cardsData={filterData(
                    filterUserInput(searchInput, cardsData),
                    categories,
                    brands,
                    filterUserInput(searchInput, cardsData)
                  )}
                  isFiltered={isFiltered}
                />
                <div className="main-content">
                  <FiltersContainer />
                  <ProductList
                    cardsData={filterData(
                      filterUserInput(searchInput, cardsData),
                      categories,
                      brands,
                      filterUserInput(searchInput, cardsData)
                    )}
                    isFiltered={isFiltered}
                  />
                </div>
                <Pagination
                  cardsData={filterData(
                    filterUserInput(searchInput, cardsData),
                    categories,
                    brands,
                    filterUserInput(searchInput, cardsData)
                  )}
                  isFiltered={isFiltered}
                />
              </>
            )}
          </Route>
          <Route exact path="/wishlist">
            <Wishlist cards={filterWishlistItems(wishlist, cardsData)} />
          </Route>
          <Route exact path="/:id">
            <Page card={activeItem} />
          </Route>
          <Route>
            <h1 className="page-not-found">Oops, wrong page 404</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
