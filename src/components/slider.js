import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const slider = () => {
  return <div className='sliderWidth'>
    <Carousel>
                <div>
                    <img src="https://via.placeholder.com/300.png/09f/fff" />
                    <p className='legend'>What Is Lorem Ipsum?</p>
                </div>
                <div>
                <img src="https://via.placeholder.com/300.png/000000/FFFFFF" />
                <p className='legend'>Why Use Lorem Ipsum?</p>
                </div>
                <div>
                <img src="https://via.placeholder.com/300.png/FF0000/FFFFFF" />
                <p className='legend'>How to Generate Lorem Ipsum?</p>
                </div>
            </Carousel>

  </div>;
};

export default slider;
