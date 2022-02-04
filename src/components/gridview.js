import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

function gridview() {
  return <div className='GridView'>
      <Container>
  <Row>
    <Col sm={4} className='col'>
        <img src='https://via.placeholder.com/320/180'></img>
        <h2>How To Set Custom Text</h2>
        <p>Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>      
        <button className="readmore-btn"> <a href='#'>Read More</a> </button>
    </Col>
    <Col sm={4} className='col'>
        <img src='https://via.placeholder.com/320/180'></img>
        <h2>How To Set Custom Text</h2>
        <p>Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        <button className="readmore-btn"> <a href='#'>Read More</a> </button>
    </Col>
    <Col sm={4} className='col'>
        <img src='https://via.placeholder.com/320/180'></img>
        <h2>How To Set Custom Text</h2>
        <p>Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        <button className="readmore-btn"> <a href='#'>Read More</a> </button>
    </Col>
  </Row>
</Container>

  </div>;
}

export default gridview;
