import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import LoadComments from './LoadComments';
import CommentForm from './CommentForm';

const DishDetail = props => {
    return (
        <div>
            <Card style={{ marginTop: "10px" }}>
                <CardBody style={{ textAlign: "left" }}>
                    <CardTitle style={{ fontWeight: "bold" }}>{props.dish.name}</CardTitle>
                    <CardText>{props.dish.description}</CardText>
                    <CardText>Price: {props.dish.price}/-</CardText>
                </CardBody>
                <CardImg top src={props.dish.image} alt={props.dish.name} />
                <CardBody>
                    <CardTitle style={{ fontWeight: "bold", textAlign: "center" }}>Comments</CardTitle>
                    <hr />
                    <LoadComments style={{ textAlign: "left" }} comments={props.comments} />
                    <hr />
                    <CommentForm dishId={props.dish.id} />
                </CardBody>
            </Card>
        </div>
    );
}

export default DishDetail;