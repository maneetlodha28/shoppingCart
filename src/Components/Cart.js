import React from "react";
import {
  Container,
  ListGroupItem,
  Button,
  ListGroup,
  CardHeader,
  CardBody,
  Card,
  CardFooter,
  Col,
  Row,
} from "reactstrap";

const Cart = ({ cartItem, removeItem, buyNow }) => {
  let amount = 0;
  cartItem.forEach((item) => {
    amount = parseFloat(amount) + parseFloat(item.productPrice);
  });

  return (
    <Container fluid>
      <h1 className=" mt-5 heading-2">Cart</h1>
      <ListGroup>
        {cartItem.map((item) => (
          <ListGroupItem key={item.id}>
            <Row>
              <Col>
                <img height={80} src={item.tinyImage} />
              </Col>
              <Col className="text-center">
                <div className="text-primary">{item.productName}</div>
                <span>Price: &#8377;{item.productPrice}</span>
                <Button
                  color="danger"
                  onClick={() => {
                    removeItem(item);
                  }}
                >
                  Remove
                </Button>
              </Col>
            </Row>
          </ListGroupItem>
        ))}
      </ListGroup>
      {/* //if no item in cart  */}
      {cartItem.length >= 1 ? (
        <Card className="text-center mt-3">
          <CardHeader>Grand Total</CardHeader>
          <CardBody>
            Your amount for {cartItem.length} is {amount}
          </CardBody>
          <CardFooter>
            <Button onClick={buyNow}>Pay here</Button>
          </CardFooter>
        </Card>
      ) : (
        <h2
          className="heading-2 "
          style={{ fontSize: "x-large", paddingTop: 5 + "rem" }}
        >
          Cart is Empty
        </h2>
      )}
    </Container>
  );
};

export default Cart;
