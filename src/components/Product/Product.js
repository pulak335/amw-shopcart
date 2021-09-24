import React from 'react';
import Rating from 'react-rating';
import './Product.css';

function Product(props) {
    // console.log(props.product);
    const { name, price, img, star, stock, seller } = props.product;
    return (
        <div className="product">
            <img src={img} alt="" srcset="" />
            <div className="pro-des">
            <h3>{name}</h3>
            <p>by: {seller}</p>
            <h4>Price: ${price}</h4>
                <Rating
                    className="star"
                    readonly
                    initialRating={star}
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star">
                </Rating>
                
            <p>only {stock} left in stock - order soon</p>
            <button className="pro-btn" onClick={() =>props.addCardHandler(props.product)}>Add to card</button>
            </div>
        </div>
    )
}

export default Product;
