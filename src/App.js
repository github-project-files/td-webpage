import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Products from './pages/product';
import Contact from './pages/contact';
import Signup from './pages/register';
import Footer from './pages/footer';
import Thankyou from './pages/thankyou';

const App = () => {
  return (
    <div>
      <BrowserRouter>      
        <Navbar />
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/product" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/register" element={<Signup />} />
              <Route path="/thankyou" element={<Thankyou />} />
          </Routes>
      </BrowserRouter>
      <Footer/>
      </div>
  );
}

export default App;