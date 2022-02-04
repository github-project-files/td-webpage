import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Home from './components/home';
import About from './components/about';
import Services from './components/services';
import Products from './components/product';
import Contact from './components/contact';
import Signup from './components/register';
import Thankyou from './components/thankyou';

const App = () => {
  return (   
      <BrowserRouter>      
        <Navbar />
          <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/product" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/register" element={<Signup />} />
              <Route path="/thankyou" element={<Thankyou />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
