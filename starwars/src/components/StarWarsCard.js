import React from "react";
import { Card, CardBody, CardTitle, CardText, Col } from "reactstrap";

const StarwarsCard = (props) => {

    return (
        <Col s="6">
        <Card className="Container">
            <CardBody>
            <CardTitle><h1>{props.name}</h1></CardTitle>
            <CardText>
                <small className="text-muted">
                Birth Year: {props.birth_year}
                <br></br>
                Height: {props.height}
                <br></br>
                Weight: {props.mass}
                </small>
            </CardText>
            </CardBody>
        </Card>
        </Col>
    );
};

export default StarwarsCard;