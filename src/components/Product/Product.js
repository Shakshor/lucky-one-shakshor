import React from 'react';
import './Product.css';

const Product = ({ product, handleAddToCart }) => {
    const { img, name, price } = product;

    return (
        <div className='product'>
            <img src={img} />

            <div className='product-info'>
                <p><strong>Name: {name}</strong></p>
                <p>price: ${price}</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p>Add To Cart</p>
            </button>
        </div>
    );
};

export default Product;