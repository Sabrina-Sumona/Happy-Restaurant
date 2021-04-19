import React from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap';

const MenuItem = props => {
    return (
        <div>
            <Card style={{ margin: "10px" }}>
                <CardBody>
                    <CardImg width="100%" alt={props.dish.name} src={props.dish.image} />
                    <CardImgOverlay style={{ fontWeight: "bold" }}>
                        <CardTitle style={{ cursor: "pointer", display: "inline-block", color: "white", padding: "2px", backgroundColor: "#343A40", backgroundRadius: "10px" }} onClick={props.DishSelect} >
                            {props.dish.name}
                        </CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    );
}

export default MenuItem;