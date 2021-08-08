import React from 'react';

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
    if (total > 35) {
        shipping = 8.99;
    } else if (total > 20) {
        shipping = 6.99;
    } else if (total > 0) {
        shipping = 4.99;
    } else if (total > 100) {
        shipping = 0;
    }

    return (
        <div>
            <h1>Order Summary</h1>
            <h4>Items Ordered : {cart.length} </h4>
            <p>Shipping Cost : {shipping} </p>
            <p>Total Price : $ {Number(total + shipping).toFixed(2)} </p>
        </div>
    );
};

export default Cart;