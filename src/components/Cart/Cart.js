import React from 'react';

const Cart = ({ cart }) => {
    console.log(cart);
    return (
        <div>
            <h4>selected amount: {cart.length}</h4>
        </div>
    );
};

export default Cart;