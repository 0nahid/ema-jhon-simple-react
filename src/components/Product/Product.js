import React from 'react';
import './Product.css'
import { FaShoppingCart } from "react-icons/fa";
const Product = (props) => {
    const { img, name, url, stock, seller, price } = props.product;
    console.log(props);
    return (
        <div className="product">
            <div>
                <a href={url}> <img src={img} alt="" /> </a>
            </div>
            <div className="product-detail">
                <h2>{name}</h2>
                <p><small>By:{seller}</small></p>
                <p>Price:${price}</p>
                <p>Only {stock} left - order quickly.</p>
                <button className="cart-button"> <FaShoppingCart/>Add to cart</button>
            </div>
        </div>
    );
};
export default Product;