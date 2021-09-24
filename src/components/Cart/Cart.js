import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    
    let totalQuantity = 0;
    let totalPrice = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        totalPrice = totalPrice + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    const shipping = totalPrice > 0 ? 15 : 0;
    const tax = (totalPrice + shipping) * 0.10;
    const grandPrice = totalPrice + shipping + tax;

    return (
        <div>
            <h2>Order Summary</h2>
            <h5>Items ordered:{totalQuantity}</h5>
            <h3>Total:$ { totalPrice }</h3>
            <h4>Shipping :$ { shipping }</h4>
            <h4>Tax :$ { tax }</h4>
            <h3 style={{color: 'red'}}> Grand Total:$ { grandPrice }</h3>
        </div>
    );
};

export default Cart;