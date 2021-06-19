import React from "react";
import "../index.scss";
import { Container, Card, Button, Col, Row } from "react-bootstrap";

const CardList = ({ posts, handleCreateAcc}) =>(
    <Container>
        <Row className="pt-3 py-lg-0">
            {posts &&
            posts.map(({id, image, title, excerpt, action}) =>(
                <Col className="py-3 py-lg-0" xs={12} lg={4} key={id}>
                    <Card>



                <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                        <Card.Text>{excerpt}
                   
            </Card.Text>
                            <Button variant="danger">{action}</Button>
            </Card.Body>
                    </Card>
                </Col>
            ))}

            
        </Row>

        
    </Container>
);

export default CardList;



