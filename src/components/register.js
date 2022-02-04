import React, { useState } from "react";
import BreadCrumbBanner from './banner';
import Footer from "./footer";

const FORM_ENDPOINT = "./thankyou"; 

const Register = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <div className="container">
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </div>
    );
  }

  
  return (      
<div>
  <BreadCrumbBanner/>
    <div className="container">
      <h2>? dont have account, please Sign Up here</h2>
         <p>Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      
      target="_blank"
    >
      <div className="contact-us-form">
        <input
          type="text"
          placeholder="First Name"
          name="name"
          className=""
          required
        />
      </div>
      <div className="contact-us-form">
        <input
          type="text"
          placeholder="Last Name"
          name="name"
          className=""
          required
        />
      </div>
      <div className="">
        <input
          type="email"
          placeholder="Email Id"
          name="email"
          className=""
          required
        />
      </div>
      <div className="contact-us-form">
        <input
          type="text"
          placeholder="Phone Number"
          name="name"
          className=""
          required
        />
      </div>
      <div className="contact-us-form">
        <input
          type="date"
          placeholder="Date of Birth"
          name="name"
          className=""
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <textarea
          placeholder="Address"
          name="message"
          className=""
          required
        />
      </div>
      <div className="">
        <button
          className=""
          type="submit"
        >
          Register
        </button>
      </div>
    </form>            
    
    
    <div className="login-inline">
    <h3>please login, if you have an account with us. </h3>
        <button
          className=""
          type="submit"
        >
          Login
        </button>
      </div>
      </div>
    <Footer />
    </div>
      
  );
  
};



export default Register;