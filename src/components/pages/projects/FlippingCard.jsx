import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { FiRefreshCcw } from 'react-icons/fi';


const FlippingCard = ({ image, heading, frontText, backText, actionLink }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`card-container ${flipped ? 'flip-it' : ''}`}>
      <div className="card-flip">
        <div className="card-front">
          <Card className='card-size'>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title className='card-title'>{heading}</Card.Title>
              <Card.Text>{frontText}</Card.Text>
              <div className='d-flex justify-content-between '>
              <Button variant="primary" onClick={handleFlip} >
                <IconContext.Provider value={{ size: "1.5em" }}>
                  <FiRefreshCcw />
                </IconContext.Provider>
              </Button>
              <Card.Link href={actionLink} className='click-here-btn'>Click Here</Card.Link>
              </div>
              
            </Card.Body>
          </Card>
        </div>
        <div className="card-back">
          <Card className='card-size'>
            <Card.Body>
              <Card.Title>{backText.heading}</Card.Title>
              <Card.Text>{backText.content}</Card.Text>
              <Button variant="primary" onClick={handleFlip}>
                <IconContext.Provider value={{ size: "1.5em" }}>
                  <FiRefreshCcw />
                </IconContext.Provider>
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FlippingCard;
