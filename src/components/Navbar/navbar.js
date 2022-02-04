import React from 'react';
import {Link} from 'react-router-dom';
import "./Navbar.css";

export default function navbar() {
  return (
        <nav className='navbar'>
            <div className='navbar-inner'>
                    <h1 className='logo'>TD.</h1>      
                        <ul className='nav-links'>
                            <Link to ="/home" className='home'><li>Home</li></Link>    
                            <Link to ="/about" className='about'><li>About</li></Link>    
                            <Link to ="/services" className='services'><li>Services</li></Link>    
                            <Link to ="/product" className='products'><li>Products</li></Link>    
                            <Link to ="/contact" className='contact'><li>contact</li></Link>    
                            <Link to ="/register" className='signup'><li>Sign Up</li></Link>    
                            {/* <Link to ="/thankyou" className='thankyou'><li>Thank You</li></Link>     */}
                        </ul>
                </div>
        </nav>
    )
}
