import React from 'react';

const Cart = ({ cart }) => {
    let name = '';
    for (const product of cart) {
        console.log(product);
        name = product.name;
    }
    return (
        <div>
            <h4>Selected Product</h4>
            <p><strong>Name: {name}</strong></p>
        </div>
    );
};

export default Cart;