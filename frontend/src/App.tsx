import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { Outlet } from "react-router-dom";

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
          <Outlet />
        </Container>
      </main>
      <footer>
        <div className="text-center">All rights reserverd</div>
      </footer>
    </div>
  );
}

export default App;
