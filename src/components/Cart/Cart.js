import React from 'react';
import './Cart.css';
import {RiDeleteBin6Fill} from 'react-icons/ri';

const Cart = (props) => {
    // console.log(props)
    const { name,img}  = props.item
    
    return (
        <div>

            <div className='cart'>
            <img src={img} alt="" />
            <p className='p-4'>{name}</p>
            <button className='delete-btn pt-4'><RiDeleteBin6Fill className='w-2 mx-auto fs-3'/></button>  
            </div>
            
        </div>
    );
};

export default Cart;