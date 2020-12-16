import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

import { Container, Row, Col } from "reactstrap";
import BuyPage from "./Components/BuyPage";
import Cart from "./Components/Cart";

function App() {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (item) => {
    const isAlreadyAdded = cartItem.findIndex(function (array) {
      //find index return index if finds else -1
      return array.id == item.id;
    });
    if (isAlreadyAdded !== -1) {
      toast("already added in carty", {
        type: "error",
      });
    } else {
      setCartItem([...cartItem, item]);
    }
  };

  const buyNow = (item) => {
    setCartItem([]);
    toast("Order Confirmed", {
      type: "success",
    });
  };

  const removeItem = (item) => {
    setCartItem(cartItem.filter((singleItem) => singleItem.id !== item.id));
  };

  return (
    <Container fluid>
      <ToastContainer />
      <Row>
        <Col md={9}>
          <BuyPage addToCart={addToCart} />
        </Col>
        <Col md={3}>
          <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
