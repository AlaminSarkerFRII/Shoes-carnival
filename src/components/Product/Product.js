import React from 'react';
import './Product.css'
import { Button,Card } from 'react-bootstrap';
import {BsCartPlus} from 'react-icons/bs'

const Product = ({product,handleAddToCart}) => {
    
    const {name,price,img} = product



    return (
        <div>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body className="product-info">
    <Card.Title>{name}</Card.Title>
    <Card.Text> Price : ${price}</Card.Text>
    <Button className="add-to-cart" onClick={() => handleAddToCart(product)} >Add To Cart 
        <BsCartPlus className="icons"/> 
    </Button>
  </Card.Body>
</Card>

        </div>
    );
};

export default Product;