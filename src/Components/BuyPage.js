import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { random, commerce } from "faker";
import Axios from "axios";
import CartItem from "./CartItem";

const url = "https://api.pexels.com/v1/search?query=laptops&per_page=6&page=1";
const apiKey = "563492ad6f917000010000016a5b078a684949c9ae96f8c49e73bcaa";

const BuyPage = ({ addToCart }) => {
  const [product, setProduct] = useState([]);
  const fetchURL = async () => {
    const { data } = await Axios.get(url, {
      headers: {
        Authorization: apiKey,
      },
    });

    const { photos } = data;
    // console.log(photos);

    const allProduct = photos.map((photo) => ({
      // an array of objects having all this properties
      smallImage: photo.src.medium,
      tinyImage: photo.src.tiny,
      productName: random.word(),
      productPrice: commerce.price(),
      id: random.uuid(),
    }));
    // console.log(allProduct);

    setProduct(allProduct);
  };

  useEffect(() => {
    fetchURL();
  }, []);

  return (
    <Container fluid>
      <h1 className="text-center heading">Laptop Store</h1>
      <Row>
        {product.map((product) => (
          <Col md={4} key={product.id}>
            <CartItem product={product} addToCart={addToCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BuyPage;
