import React from 'react';
import BreadCrumbBanner from './banner';
import Footer from "./footer";

function thankyou() {
    return (
        <div>
        <div className="container">
          <div className="text-2xl">Thank you!</div>
          <div className="text-md">We'll be in touch soon.</div>
        </div>
        <Footer/>
        </div>
      );
}

export default thankyou;
