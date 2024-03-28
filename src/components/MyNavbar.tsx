import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const MyNavbar = function () {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/" className="text-decoration-none text-white">
              <div>Home</div>
            </Link>
          </Navbar.Brand>
          <Nav></Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
