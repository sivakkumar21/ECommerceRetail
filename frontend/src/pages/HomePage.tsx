import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useReducer } from "react";
import axios from "axios";
import { Product } from "../types/product";
import Loading from "../components/Loading";
import ErrorMessage from "../components/MessageBox";
import MessageBox from "../components/MessageBox";
import { ApiError } from "../types/ApiError";
import { getError } from "../utlis";
import ProductItem from "../components/ProductItem";

export default function HomePage() {
  type State = {
    products: Product[];
    loading: boolean;
    error: string | null;
  };

  type Action =
    | { type: "FETCH_REQUEST" }
    | { type: "FETCH_SUCCESS"; payload: Product[] }
    | { type: "FETCH_FAIL"; payload: string };

  const initialState: State = {
    products: [],
    loading: true,
    error: null,
  };

  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case "FETCH_REQUEST":
        return { ...state, loading: true };
      case "FETCH_SUCCESS":
        return { ...state, products: action.payload, loading: false };
      case "FETCH_FAIL":
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };

  const [{ loading, error, products }, dispatch] = useReducer<
    React.Reducer<State, Action>
  >(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/products");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: ApiError | any) {
        console.log(err);
        dispatch({ type: "FETCH_FAIL", payload: getError(err as ApiError) });
      }
    };

    fetchData();
  }, []);
  return loading ? (
    <Loading />
  ) : error ? (
    <MessageBox error={error} />
  ) : (
    <Row className="mt-5">
      {products.map((item) => (
        <Col key={item.slug} sm={6} md={4} lg={3}>
          <ProductItem product={item} />
        </Col>
      ))}
    </Row>
  );
}
