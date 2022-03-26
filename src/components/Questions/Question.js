import React from 'react';
import {Card } from 'react-bootstrap';

const Question = () => {
    return (
    <div className='row w-50 mx-auto '>
<div className='col-lg-12'>
<Card className="mt-4" >
  <Card.Body >
    <Card.Title>How react Works</Card.Title>
    <Card.Text>
    React is a JavaScript library that creates user interfaces (UIs) in a predictable and efficient way using declarative code.look like the screen below, with a navbar, a header, a filter, and a list. That’s because each line of code declares what each element of the app is You can use it to help build single page applications and mobile app
    </Card.Text>
  </Card.Body>
</Card>

<div>
<Card className="mt-4">
<Card.Body >
    <Card.Title>How useState Works</Card.Title>
    <Card.Text>
    useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value and another function to update this value.
    </Card.Text>
  </Card.Body>
  </Card>
</div>
</div>
</div>
    );
};

export default Question;