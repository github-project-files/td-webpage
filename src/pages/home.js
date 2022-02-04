import React from 'react';
import GridView from './gridview';
import Slider from './slider'

function home() {
  return (
        <div>
            <Slider />
                <div className='container'>                
                        <h1>What Is Lorem Ipsum?</h1>
                        <div className='img-flex'>
                        <p>Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <img src="https://via.placeholder.com/300.png/09f/FFFFFF"></img>
                    </div>
                </div>
                <div className='container'><GridView /></div>
        </div>
      )
}

export default home;