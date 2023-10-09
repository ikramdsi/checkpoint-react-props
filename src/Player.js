// Player.js
import React from "react";
import { Card } from "react-bootstrap";
import imageUrl from "./assets/cr.jpg";
//import imageUrl from "./assets/MESSI.jpg";
const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imageUrl} /> {/* Assurez-vous que imageUrl est correctement passé */}
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Team: {team}
          <br />
          Nationality: {nationality}
          <br />
          Jersey Number: {jerseyNumber}
          <br />
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
