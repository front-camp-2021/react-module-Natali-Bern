import Search from "../Search/Search";
import ProductCard from "../ProductCard/ProductCard";
import React from "react";
import { useSelector } from "react-redux";

function ProductList ({cardsData, isFiltered}) {
  const elementsIndexes = useSelector((state) => state.paginationElements)[
    useSelector((state) => state.paginationElements).length - 1
  ];
  const searchStatus = useSelector((state) => state.searchStatus);
  const isSearched = searchStatus[searchStatus.length - 1];

  let dataForRender = [];

  if (isFiltered) {
    dataForRender = cardsData;
  } else if (isSearched) {
    dataForRender = cardsData;
  } else if (isFiltered && isSearched) {
    dataForRender = cardsData;
  } else {
    dataForRender = cardsData;
  }

  return (
    <div className="productlist">
      <Search />
      <div className="products">
        {dataForRender.length > 0 ? (
          dataForRender
            .slice(elementsIndexes[0], elementsIndexes[1])
            .map((filteredData) => (
              <ProductCard
                key={filteredData.id}
                id={filteredData.id}
                img={filteredData.images[0]}
                rating={filteredData.rating}
                price={filteredData.price}
                title={filteredData.title}
              />
            ))
        ) : (
          <div className="products__filters-error-message">
            Nothing was found. Please, reset your filters or check your input
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductList;