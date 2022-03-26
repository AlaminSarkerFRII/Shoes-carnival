import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props)
    const { name,price,img,id }  = props.item
    
    return (
        <div>

            <div className='cart'>
            <img src={img} alt="" />
            <p className="w-75 mx-auto">{name}</p>
            </div>  
        </div>
    );
};

export default Cart;