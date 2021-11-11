import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import { useDispatch } from "react-redux";
import { clearState } from "../../redux/wishlistSlice";

function Wishlist(props) {
    const dispatch = useDispatch();
    let cardsData = props.cards;

    return (
        <>
            <div className="wishlist-nav-container">
                <Link to="/">
                    <button className="wishlist-nav-container__wishlist-back-btn">Back to Purchases</button>
                </Link>
                <button
                    className="wishlist-nav-container__wishlist-clear-btn"
                    onClick={() => dispatch( clearState({}) )}> Clear Wishlist</button>
            </div>

            <div className="wishlist-cards-wrapper">
                <div className="wishlist-cards-wrapper__container">
                    {
                        cardsData.length > 0 ?
                            cardsData.map(cardData => {
                                return <ProductCard
                                    key={cardData.id}
                                    id={cardData.id}
                                    img={cardData.images[0]}
                                    rating={cardData.rating}
                                    price={cardData.price}
                                    title={cardData.title}
                                    displayed={true}
                                />
                            }) :
                            <h1 className="wishlist-cards-wrapper__message">No items were added yet</h1>
                    }
                </div>
            </div>
        </>
    )
}

export default Wishlist;