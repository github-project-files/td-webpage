import React from 'react';
import BreadCrumbBanner from './banner';

function thankyou() {
    return (
        <div>
          <BreadCrumbBanner/>
            <div className="container">
              <div className="text-2xl">Thank you!</div>
              <div className="text-md">We'll be in touch soon.</div>
            </div>
        </div>
      );
}

export default thankyou;