import React from 'react';
import BreadCrumbBanner from './banner';
import Footer from './footer';

const product = () => {
  return <div><BreadCrumbBanner/>
  <div className='container'>
  <h2>What Is Lorem Ipsum?</h2>
  <p>Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>
<Footer/>
</div>;
};

export default product;
