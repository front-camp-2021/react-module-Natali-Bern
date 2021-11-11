  import WishlistButton from "./WishlistButton/WishlistButton";
 import { useDispatch, useSelector } from "react-redux";
 import { addToWishlist, removeFromWishlist } from "../../redux/wishlistSlice";
 import { Link } from "react-router-dom";
 import { addDisplayedCard } from "../../redux/itemPageSlice";

 function ProductCard({ img, id, rating, title, price, displayed }) {
   const dispatch = useDispatch();
   const wishlistCards = useSelector((state) => state.wishlist);
   const isInWishlist = wishlistCards.includes(id);

   function setWishlistItems(event) {
     let isInWishlist = false;

     wishlistCards.filter((item) => {
       if (item === event.target.id) {
         isInWishlist = true;
       }
       return null;
     });

     if (isInWishlist) {
       dispatch(
         removeFromWishlist({
           item: event.target.id,
         })
       );
     } else {
       dispatch(
         addToWishlist({
           item: event.target.id,
         })
       );
     }
   }

   function setActiveItem() {
     dispatch(
       addDisplayedCard({
         card: {
           id: id,
           img: img,
           rating: rating,
           price: price,
           title: title,
         },
       })
     );
   }

   return (
     <div className="products__card">
       <img src={img} className="products__image" alt={title}></img>
       <div className="products__rating-and-price">
         <div className="products__rating">{rating}</div>
         <div className="products__price">₴{price}</div>
       </div>
       <ul className="products__item-descriptions">
         <Link to={`/id:${id}`} className="products__item-page-link">
           <li
             className="products__item-name"
             onPointerDown={setActiveItem}
           >
             {title.slice(0, 40)}...
           </li>
         </Link>
         <li className="products__item-description">
           Redesigned from scratch and completely revised.
         </li>
       </ul>
       <div className="products__buttons">
         <WishlistButton
           setWishlistItems={setWishlistItems}
           id={id}
           isInWishlist={isInWishlist}
           displayed={displayed}
         />
         <button className="products__add-to-cart-button">
           ADD TO CART
         </button>
       </div>
     </div>
   );
 }
  




export default ProductCard;