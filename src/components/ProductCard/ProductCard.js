import React from "react";
import './ProductCard.css';
import  Star from './star.svg';
import Heart from './heart.svg';
import Bag from './shopping-bag.svg';




function ProductCard(props) {

    const {title, price, rating, brand, images} = props.item;
    console.log(props);
    return (
        <div className="product-card">
        <div className="product-card__inner">
            <div className="product-card__image" >
            <img src={images[0]} alt="" />
            </div>
            <div className="product-card__wrapper">
                <div className="product-card__rating rating">
                    <span className="rating__count">{rating}
                        <img className="rating__image" src={Star} />
                    </span>
                    
                </div>  
                <div className="rating__price">
                    {price}
                </div>
            </div>
            <h3 className="product-card__name">
                {title}
            </h3>
            <div className="product-card__description">
                {brand}
            </div>
        </div>
            <div className="product-card__buttons">
                <button className="button-wishlist">
                    <img className="button-wishlist__image" src={Heart} />
                    <span className="button-wishlist__text">Wishlist</span>
                </button>
                <button className="button-addtocart">
                    <img className="button-addtocart__image" src={Bag} />
                    <span className="button-addtocart__text">Add to Cart</span>
                </button>
            </div>
    </div> 

    );
}


        
  

export default ProductCard