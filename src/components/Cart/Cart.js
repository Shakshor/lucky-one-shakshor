import React, { useState } from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    // console.log(cart);

    // checking  the maximum length of array. If it is greater than 4 then remove the last element and give an alert.
    if (cart.length > 4) {
        cart.pop();
        alert('Do not add more than 4 items');
    }

    const [random, setRandom] = useState([]);
    const [remove, setRemove] = useState([]);

    // choosing a random products from an array
    const randomProducts = () => {
        const selectedProducts = [cart[0], cart[1], cart[2], cart[3]];
        const randomProducts = selectedProducts[Math.floor(Math.random() * selectedProducts.length)];
        if (randomProducts) {
            setRandom(randomProducts);
        }
    }

    // removing the previous selected items
    const removalProducts = () => {
        const removalProducts = cart.splice(0, cart.length);
        // console.log(removalProducts);
        setRemove(removalProducts);
    }

    return (
        <div className='selected-area'>
            <h3 className='cart-title'>Selected Products:</h3>
            <h4>{cart[0]}</h4>
            <h4>{cart[1]}</h4>
            <h4>{cart[2]}</h4>
            <h4>{cart[3]}</h4>
            <br></br>
            <h2>{random}</h2>
            <button onClick={() => { randomProducts() }} className='random-btn'>
                <p>Choose 1 For Me</p>
            </button>
            <br></br><br></br>
            <button onClick={() => { removalProducts() }} className='remove-btn'>
                <p>Choose Again</p>
            </button>
        </div>
    );
};

export default Cart;