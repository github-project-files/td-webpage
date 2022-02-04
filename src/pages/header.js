import React from 'react';
import {Link} from 'react-router-dom';

function header() {
  return  (
    <nav className='navbar'>
        <h1 className='logo'>TD</h1>      
    <ul>
        <Link to ="/" className='home'><li>Home</li></Link>    
        <Link to ="/about" className='about'><li>About</li></Link>    
        <Link to ="/services" className='services'><li>Services</li></Link>    
        <Link to ="/products" className='products'><li>Products</li></Link>    
        <Link to ="/contact" className='contact'><li>contact</li></Link>    
        <Link to ="/login" className='loign'><li>Login</li></Link>    
        <Link to ="/Signup" className='register'><li>Signup</li></Link>    
    </ul>
  </nav>
  )
}

export default header;