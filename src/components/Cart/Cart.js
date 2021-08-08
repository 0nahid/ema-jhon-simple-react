import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart;
    // const totalPrice = cart.reduce((total, product) => total + product.price, 0) ;
    // const total = cart.reduce((total, product) => total + product.price, 0);
    // let total = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const product = cart[i];
    //     total = total + product.price;
    // }
    const total = cart.reduce((total, product) => total = (total + product.price), 0);
    let shipping = 0;
    if (total > 350) {
        shipping = 0;
    } else if (total > 150) {
        shipping = 4.99;
    } else if (total > 0) {
        shipping = 6.99;
    }
    const tax = total / 10;
    // const grandTotal = Number(total + shipping + tax).toFixed(2);
    const grandTotal = total + shipping + tax;
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div className="order-detail">
            <h1>Order Summary</h1>
            <h4>Items Ordered : {cart.length} </h4>
            <p>Product Price : $ {formatNumber(total)}</p>
            <p>Shipping Cost : $ {formatNumber(shipping)} </p>
            <p><small>Tax + VAT : $ {formatNumber(tax)} </small></p>
            <p>Total Price : $ {formatNumber(grandTotal)} </p>
        </div>
    );
};

export default Cart;