import React from 'react';

const Cart = (props) => {
    
    // Display Cart Show:

    const { name, img, price } = props.courseItem;
    return (  
        
          <div className="col-md-4">
            <div className="single-item text-center my-4">
              <div className="card p-2">
                <img className="card-img-top" src={img} alt=""/>
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <h4 className="price">${price}</h4>
                  <button className="btn btn-sm btn-primary"
                    onClick={ () =>props.addToCart(props.courseItem)}>Enrolled Now</button>
                </div>
              </div>
            </div>
          </div>
         
        );
      }


export default Cart;