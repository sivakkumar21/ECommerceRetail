import React from "react";
import { Button, Card } from "react-bootstrap";
import { Product } from "../types/product";
import { Link } from "react-router-dom";
import Rating from "./Rating";

function ProductItem({ product }: { product: Product }) {
  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Rating rating={product.rating} numReviews={product.numReviews} />
          {product.countInStock === 0 ? (
            <Button variant="light" disabled>
              Out of Stock
            </Button>
          ) : (
            <Button variant="secondary">Add to cart</Button>
          )}
        </Card.Body>
      </Link>
    </Card>
  );
}

export default ProductItem;
