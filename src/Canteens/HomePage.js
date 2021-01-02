import React from "react";
import { Container, Card } from "react-bootstrap";
import useFirestore from "../hooks/useFirestore";
const HomePage = () => {
  const { docs } = useFirestore("CanteenImages");
  return (
    <div className="image-list">
      {docs &&
        docs.map(doc => (
          <div key={doc.id} className="box">
            <Card className="bg-dark text-white" style={{ width: "18rem" }}>
              <Card.Img src={doc.URL} alt="Card image" fluid />
              <Card.ImgOverlay>
                <Card.Title>{doc.id}</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </div>
        ))}
    </div>
  );
};

export default HomePage;
