import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <div className='shop-container'>
            <div className='products-container'>
                <h2>items List</h2>
            </div>
            <div className='cart-container'>
                <h4>cart List</h4>
            </div>
        </div>
    );
};

export default Shop;