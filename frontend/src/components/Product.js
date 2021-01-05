import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Product = (props) => {
  const { product } = props;

  // console.log(product.image);

  return (
    <Card className="pt-3 my-3 rounded" style={{ minHeight: "450px" }}>
      <Link to={`/product/${product._id}`}>
        <Card.Img
          className="p-3"
          src={product.image}
          variant="top"
          alt={product.name}
          height="250px"
        />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            rating={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
