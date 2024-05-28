import { Col, Container, Nav, Navbar, NavbarBrand, Row } from "react-bootstrap";
import { sampleProducts } from "./data";

function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <NavbarBrand>TS Amazonas</NavbarBrand>
          </Container>
          <Nav>
            <a href="/cart" className=" nav-link">
              Cart
            </a>
            <a href="/sign-in" className="  nav-link">
              Sign In
            </a>
          </Nav>
        </Navbar>
      </header>
      <main>
        <Container>
          <Row>
            {sampleProducts.map((item) => (
              <Col key={item.slug} sm={6} md={4} lg={3}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="product-image"
                />
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <p>{item.description}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </main>
      <footer>
        <div className="text-center">All rights reserverd</div>
      </footer>
    </div>
  );
}

export default App;
