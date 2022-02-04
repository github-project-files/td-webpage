import React, { useState, Fragment } from "react";
import BreadCrumbBanner from './banner';

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
    <div className="form-address">
      <div className="office-address">
        <h3>
          Lorem Impsum Lorem Impsum
        </h3>
        <p>Lorem Impsum Lorem Impsum,<br/>
        Lorem Impsum Lorem,<br/>
        Lorem Impsum<br/>
        +91 000-000-000<br/>
        john.doe@domain.com</p>
      </div>
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
  </div>
</div>      
  );  
};

export default ContactForm;