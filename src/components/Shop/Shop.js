import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {

    const [products , setProducts] = useState([]);
    const [cart,setCart ] = useState([]);

    //rendom number

    const [random, setRandom] = useState (-1);

    useEffect(() => {
        fetch('products.json')
        .then(res =>res.json())
        .then(data => setProducts(data)) 

    } ,[])

    const handleAddToCart = (props) => {
        // const newCart = [...cart, product];
        let newCart = [];

        let exist = cart.find(product =>product.name === props.name)

        if(cart.length >=4){
            alert(" you added 4 items in your card")
        }
        else if(!exist){
            newCart = [...cart, props]
        }
        else{
            alert("you already added this item in your cart")
            cart.filter(product=> product.name !==props.name);
            newCart = [...cart]
        }
        setCart(newCart);
      };

      //function rendom

      const getRandomObject = cart[random]
      console.log(getRandomObject)

      const getRandomNumber = () =>{
        setRandom (Math.floor(Math.random()*cart.length))
        if(getRandomObject){
        alert(`${getRandomObject?.name}`)
    }
        }

        // reset cart function
        const handleResetCart = () =>{
            setCart([]);
        }
      

    return (
        <div className='row shop-container mx-auto'>

        <div className='products-container col-12 col-md-9'>

        <div className='row mt-5 g-4 mx-auto'>
        {
            products.map((product) => <Product 
            key={product.id}
            product ={product}
            handleAddToCart = {handleAddToCart}
            >
            </Product>)
        } 
        </div>
        </div>
            <div className='cart-container col-12 col-md-3'>
                         <div className='mt-5'>
                            <h3>Selected Shoes </h3>
                    </div>          
                        {
                            cart.map(item => <Cart 
                                key = {item.id}
                                item ={item}
                            ></Cart>)
                        }

                        <div>
                            <button onClick={getRandomNumber} className='btn-choose '>Choose 1 item</button> <br />
                            <button onClick={handleResetCart} className='btn-reset mt-4 mb-4'>Reset Item</button>
                        </div>
            </div>

        </div>
    );
};

export default Shop;