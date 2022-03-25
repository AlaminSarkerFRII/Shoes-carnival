import React from 'react';
import { Button,Card } from 'react-bootstrap';
import {BsCartPlus} from 'react-icons/bs'

const Product = (props) => {
    console.log(props);

    const {name,price,img,id} = props.product

    return (
        <div>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text> Price : ${price}</Card.Text>
    <Button variant="primary">
        <p>Add To Cart </p>
        <BsCartPlus/> 
    </Button>
  </Card.Body>
</Card>

        </div>
    );
};

export default Product;