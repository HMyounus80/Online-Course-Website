import React from 'react';

const CartItem = (props) => {
     const { name, price } = props.cart;
    const cart = props.cart;
    return (
        // Chackout Option :
        <div>
         <li className="list-group-item d-flex my-2 shadow justify-content-between">
         <span>{name}</span> <span> ${price}</span>
      </li>   
   </div> 
   ); 
}

export default CartItem;