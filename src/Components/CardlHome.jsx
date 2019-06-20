import React from 'react';
import EasternLogo from '../imgs/Eastern2.jpg';
import DTELogo from '../imgs/DTELogo.png';
import '../styles/CarouselStyle.css';
import { Card, CardDeck } from 'react-bootstrap';

const CardHome = () => {
  return (
    <CardDeck>
      <Card>
        <Card.Img variant="top" src={EasternLogo} />
        <Card.Body>
          <Card.Title>Eastern Michigan University</Card.Title>
          <Card.Text>B.S Computer Science</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={DTELogo} height="400px" />
        <Card.Body>
          <Card.Title>DTE Energy</Card.Title>
          <Card.Text>Associate Business & Planning Analyst</Card.Text>
        </Card.Body>
      </Card>
    </CardDeck>
  );
};

export default CardHome;
