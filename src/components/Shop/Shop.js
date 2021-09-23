import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product'
import Cart from './../Cart/Cart';

function Shop() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const addCardHandler = (product) => {
        const newCart = [...cart,product];
        setCart(newCart);
      }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product key={product.id} product={product} addCardHandler={addCardHandler}></Product>)
                }
            </div>
            <div className="card-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    )
}

export default Shop;
