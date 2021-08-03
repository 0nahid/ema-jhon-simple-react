import React from 'react';
import './Product.css'
const Product = (props) => {
    const { img, name } = props.product;
    console.log(props);
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-detail">
                <h2>{name}</h2>
            </div>
        </div>
    );
};

export default Product;