import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let totalPrice = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price;
    }
    return (
        <div>
            <h2>Order Summary</h2>
            <h5>Items ordered:{cart.length}</h5>
            <h4>Total:$ { totalPrice }</h4>
        </div>
    );
};

export default Cart;