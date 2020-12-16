import React from "react";

import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardImg,
  Button,
} from "reactstrap";

const CartItem = ({ product, addToCart }) => {
  return (
    <Card className="mt-2 mb-1">
      <CardImg top height="250" width="100%" src={product.smallImage} />
      <CardBody className="text-center">
        <CardTitle>{product.productName}</CardTitle>
        <CardText className="secondary">
          {" "}
          &#8377;{product.productPrice}
        </CardText>
        <Button
          color="primary"
          onClick={() => {
            addToCart(product);
          }}
        >
          Add to Cart
        </Button>
      </CardBody>
    </Card>
  );
};

export default CartItem;
