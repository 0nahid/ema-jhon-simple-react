import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    // const totalPrice = cart.reduce((total, product) => total + product.price, 0) ;
    const total = cart.reduce((total, product) => total + product.price, 0);
    return (
        <div>
            <h1>Order Summary</h1>
            <h4>Items Ordered : {cart.length} </h4>
            <p>Total Price : $ {total} </p>
        </div>
    );
};

export default Cart;