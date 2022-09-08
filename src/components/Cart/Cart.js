import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CartItems from "./CartItemsList";

const Cart = () => {
    return (
        <Container center>
            <div style={{fontSize: "25px", fontWeight:"600", margin:"1rem"}}>
            <span >Shopping Cart</span>
            </div>
            <Row>
                <Col xs={6} md={12}>
                    <CartItems />
                </Col>
            </Row>
        </Container>
    );
};

export default Cart;
