import React from 'react';
import { useState } from 'react';
import courseData from '../../fakeData/coursedata';
import Cart from '../Cart/Cart';
import CartItem from '../CartItem/CartItem';


const Course = () => {

  // Fake Data load:

    const courseData15 = courseData.slice(0,15);
    const [courses, setCourses] = useState(courseData15);
    const [cart, setCart] = useState([]);

    // New Cart Add :

     const addToCart = (cartItem) => {
       console.log('cart add')
      const newCart =[...cart, cartItem];
      setCart(newCart);
    }

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    return (
     
      <div className="container-fluid px-2">
      <h2 className="text-center py-4 logo">Education Online Class</h2>
      <hr/>
      <div className="row food-items">
        <div className="col-md-9 row border-right ">
        {
        courses.map(course => <Cart addToCart={addToCart} courseItem={course}></Cart>)
        }
        </div>
        <div className="col-md-3">
          <h2 className="text-center">Cart  {cart.length} </h2>
          <ul className="list-group"> 
             {cart.map(item => <CartItem cart={item} ></CartItem> )} 
            <CartItem cart={cart}></CartItem>
           </ul> 
            <button type="button" className="btn btn-primary btn-block">
            Checkout <span className="badge badge-light">$ {totalPrice}</span>
          </button>
      </div>
     </div>
     </div>
    
   
  );
    
}

export default Course;
