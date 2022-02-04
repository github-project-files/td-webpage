import React, { useState } from "react";
import BreadCrumbBanner from './banner';
import Footer from "./footer";

const FORM_ENDPOINT = "./thankyou"; 

const ContactForm = () => {
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
      <h2>Ask how to Generate Lorem Impsum?</h2>
         <p>Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      
      target="_blank"
    >
      <div className="contact-us-form">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className=""
          required
        />
      </div>
      <div className="">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className=""
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <textarea
          placeholder="Your message"
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
          Send a message
        </button>
      </div>
    </form>  
          
    </div>
    <Footer />
    </div>
      
  );
  
};



export default ContactForm;
