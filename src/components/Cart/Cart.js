import React, { useState } from 'react';

const Cart = ({ cart }) => {
    console.log(cart);
    // let name = '';
    // for (const product of cart) {
    //     console.log(product);
    //     name = product.name;
    // }

    if (cart.length > 4) {
        cart.pop();
        alert('Do not add more than 4 items');
    }

    const [random, setRandom] = useState([]);
    const [removal, setRemoval] = useState([]);

    const randomProducts = () => {
        const selectedProducts = [cart[0], cart[1], cart[2], cart[3]];
        const randomProducts = selectedProducts[Math.floor(Math.random() * selectedProducts.length)];
        setRandom(randomProducts);
    }

    const removalProducts = () => {
        const selectedProducts = [cart[0], cart[1], cart[2], cart[3]];
        const removalProducts = selectedProducts.splice(3, 0);
        // console.log(removalProducts);

        setRemoval(removalProducts);
    }

    return (
        <div>
            <h3>Selected Product</h3>
            <h4>{cart[0]}</h4>
            <h4>{cart[1]}</h4>
            <h4>{cart[2]}</h4>
            <h4>{cart[3]}</h4>
            <h1>{random}</h1>
            <button onClick={() => { randomProducts() }}>
                <p>Choose 1 for me</p>
            </button>
            <br></br>
            <button onClick={() => { removalProducts() }}>
                <p>Choose Again</p>
            </button>
        </div>
    );
};

export default Cart;