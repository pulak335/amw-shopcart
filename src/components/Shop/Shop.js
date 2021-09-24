import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Product from '../Product/Product';
import Cart from './../Cart/Cart';
import './Shop.css';

function Shop() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts,setDisplayProducts] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setDisplayProducts(data)
            });
        
    }, []);
    const addCardHandler = (product) => {
        const newCart = [...cart,product];
        setCart(newCart);
        addToDb(product.key);
    }
    useEffect(() => {
        if (products.length) {
            const saveCart = getStoredCart();
            const storeCart = [];           
        for (const key in saveCart) {
            const addedProdect = products.find(product => product.key === key);
            if (addedProdect) {
                const quantity = saveCart[key];
                addedProdect.quantity = quantity;
                storeCart.push(addedProdect);
            }
            }
            setCart(storeCart);
        }
    }, [products])
    const handleSearch = (event) => {
        const searchText = event.target.value;
        const seachKey = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(seachKey)
      }
    return (
        <>
            <div className="searchBox">
                <input
                    type="text"
                    name=""
                    onChange={handleSearch}
                    placeholder="Search Product" />
            </div>
            <div className="shop-container">
            <div className="product-container">
                {
                    displayProducts.map(product => <Product key={product.id} product={product} addCardHandler={addCardHandler}></Product>)
                }
            </div>
            <div className="card-container">
                <Cart cart={cart}></Cart>
            </div>
            </div>
        </>
    )
}

export default Shop;
