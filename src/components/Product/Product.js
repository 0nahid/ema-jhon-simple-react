import React from 'react';
import './Product.css'
const Product = (props) => {
    const { img, name ,url } = props.product;
    console.log(props);
    return (
        <div className="product">
            <div>
            <a href={url}> <img src={img} alt="" /> </a>
            </div>
            <div className="product-detail">
                <h2>{name}</h2>
            </div>
        </div>
    );
};

export default Product;