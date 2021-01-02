import React from "react";
import { Card, CardDeck, ListGroup, Image } from "react-bootstrap";
import useFirestore from "./hooks/useFirestore";

const Test = props => {
  const { docs } = useFirestore(props.name);
  return (
    <div>
      <div className="grid">
        {docs &&
          docs.map(doc => {
            return doc.Availability === true ? (
              <div key={doc.id} className="box">
                <Card
                  border="white"
                  style={{
                    width: "18rem"
                  }}
                  key={doc.id}
                >
                  <Card.Img variant="top" src={doc.URL} />

                  <Card.Body>
                    <ListGroup variant="flush">
                      <ListGroup.Item>Name : {doc.id}</ListGroup.Item>
                      <ListGroup.Item>Price : {doc.Price}</ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </div>
            ) : (
              <div key={doc.id} className="box">
                <Card
                  border="white"
                  style={{
                    width: "18rem"
                  }}
                  key={doc.id}
                >
                  <div className="BnW">
                    <Card.Img variant="top" src={doc.URL} />
                  </div>
                  <Card.Body>
                    <ListGroup variant="flush">
                      <ListGroup.Item>Name : {doc.id}</ListGroup.Item>
                      <ListGroup.Item>Price : {doc.Price}</ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Test;
