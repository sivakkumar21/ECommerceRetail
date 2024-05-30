import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams, useSearchParams } from "react-router-dom";
import { useGetProductsBySlugQuery } from "../productHooks/productBySlug";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Collapse,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import Rating from "../components/Rating";
import { Product } from "../types/product";
import Loading from "../components/Loading";
import MessageBox from "../components/MessageBox";
import { getError } from "../utlis";
import { ApiError } from "../types/ApiError";

export default function ProductPage() {
  const { slug } = useParams();

  const {
    isLoading,
    data: product,
    error,
  }: {
    isLoading: boolean;
    data: Product;
    error: string;
  } = useGetProductsBySlugQuery(slug);

  return isLoading ? (
    <Loading />
  ) : error ? (
    <MessageBox error={getError(error as ApiError)} />
  ) : (
    <div>
      <Row>
        <Col md={6}>
          <img src={product.image} alt={product.name} className="img-large" />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <Helmet>{product.name}</Helmet>
              <h1>{product.name}</h1>
            </ListGroupItem>
            <ListGroup.Item>
              <Rating rating={product.rating} numReviews={product.numReviews} />
            </ListGroup.Item>
            <ListGroupItem>Price : Rs {product.price}</ListGroupItem>
            <ListGroupItem>
              Description : <p>{product.description}</p>
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <CardBody>
              <ListGroup variant="flush">
                <ListGroupItem>
                  <Row>
                    <Col>Price :</Col>
                    <Col>Rs.{product.price}</Col>
                  </Row>
                </ListGroupItem>

                <ListGroupItem>
                  <Row>
                    <Col>Ststus</Col>
                    <Col>
                      {product.countInStock > 0 ? (
                        <Badge bg="success">In Stock</Badge>
                      ) : (
                        <Badge bg="danger">Unavailable</Badge>
                      )}
                    </Col>
                  </Row>
                </ListGroupItem>
                {product.countInStock > 0 && (
                  <ListGroupItem>
                    <div className="d-grid">
                      <Button variant="primary">Add to Cart</Button>
                    </div>
                  </ListGroupItem>
                )}
              </ListGroup>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
