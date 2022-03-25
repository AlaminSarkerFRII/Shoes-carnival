import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h1> Shoe Carnival </h1>

            <div>
            <a href="/about">About</a>
            <a href="/womans">Womans</a>
             <a href="/mens">Mens</a>
             <a href="/kids">Kids</a>
             <a href="/order">Order</a>
            </div>


        </div>
    );
};

export default Header;