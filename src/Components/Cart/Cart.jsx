import React from 'react';
import "./Cart.css"
const Cart = (props) => {
    const {cart,} = props;

    let totalPrice = 0;
    let totalShipping=0;
    cart.map(cart=> 
    {
        totalPrice = totalPrice+cart.price
        totalShipping = totalShipping+ cart.shipping;
        
    })
    const tax = totalPrice*7/100;
    const grandTotal = totalPrice+totalShipping+tax;
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Item: {cart.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <p>Grand Total: ${grandTotal}</p>
        </div>
    );
};
import "./Cart.css"
export default Cart;