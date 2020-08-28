import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {name,price} =props.item
    return (
        <li className="list-group-item d-flex my-2 shadow justify-content-between">
           <span>Course:{name}</span>  <span>price=${price}</span>
        </li>
    );

};

export default Cart;