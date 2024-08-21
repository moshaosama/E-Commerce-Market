import {
  Button,
  Container,
  Dropdown,
  Form,
  Nav,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import { CiUser } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";
import "../App.css";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
function Header() {
  const User = JSON.parse(localStorage.getItem("user")!);
  const [Show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);

  return (
    <>
      <div>
        <Container className="py-4">
          <Navbar className="d-flex justify-content-around">
            <Navbar.Brand style={{ fontWeight: "bolder", fontSize: "2pc" }}>
              Mo4a
            </Navbar.Brand>
            <div className="btn" style={{ backgroundColor: "#eee" }}>
              Your Location
            </div>
            <Form className="w-50">
              <Form.Control
                type="text"
                placeholder="Search for product"
                style={{ backgroundColor: "#eee" }}
              />
            </Form>
            <Nav className="d-flex align-items-center">
              {
                User ? (
                  // if Yes
                  <>
                    {/* Importannnnnnnnnnttttttttttttttttttttttttttttttttttttttttttt */}
                    {/* Edit CiUser Dasboard Show Account .... */}
                    <Dropdown className="rounded">
                      <Dropdown.Toggle>
                        <CiUser />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item>
                          <Link
                            to={"/myProfile"}
                            className="text-dark text-decoration-none"
                          >
                            myProfile
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Settings
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Help</Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            localStorage.clear();
                          }}
                        >
                          Logout
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <h5 className="mx-3">$0.00</h5>
                  </>
                ) : (
                  ////
                  //if No
                  <>
                    <Link to={"/Login"}>
                      <div className="btn btn-primary" id="SignIn">
                        Sign in
                      </div>
                    </Link>
                  </>
                )
                //////
              }
              <Link to={"/Carts"}>
                <div className="btn btn-danger mx-3">
                  <LuShoppingCart />
                </div>
              </Link>
            </Nav>
          </Navbar>
        </Container>
      </div>
      <div style={{ margin: "-2pc 0pc" }}>
        <Container className="py-4 ">
          <Navbar className="d-flex justify-content-between">
            <Dropdown className="rounded">
              <Dropdown.Toggle>Dropdown Button</Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Clothes</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Electronics</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Furniture</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Miscellaneous</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Shoes</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav className="d-flex align-items-center mx-3">
              <Nav.Link style={{ fontWeight: "bolder" }} className="mx-3">
                <Link className="text-decoration-none text-dark" to={"/"}>
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link style={{ fontWeight: "bolder" }} className="mx-3">
                <Link
                  className="text-decoration-none text-dark"
                  to={"/Clothes"}
                >
                  Clothes
                </Link>
              </Nav.Link>
              <Nav.Link style={{ fontWeight: "bolder" }} className="mx-3">
                <Link
                  className="text-decoration-none text-dark"
                  to={"/Electronics"}
                >
                  Electronics
                </Link>
              </Nav.Link>
              <Nav.Link style={{ fontWeight: "bolder" }} className="mx-3">
                <Link
                  className="text-decoration-none text-dark"
                  to={"/Furniture"}
                >
                  Furniture
                </Link>
              </Nav.Link>
              <Nav.Link style={{ fontWeight: "bolder" }} className="mx-3">
                <Link
                  className="text-decoration-none text-dark"
                  to={"/Miscellaneous"}
                >
                  Miscellaneous
                </Link>
              </Nav.Link>
              <Nav.Link style={{ fontWeight: "bolder" }} className="mx-3">
                <Link className="text-decoration-none text-dark" to={"/Shoes"}>
                  Shoes
                </Link>
              </Nav.Link>
            </Nav>

            {/* Responsive Navbar Links*/}
            <Button onClick={handleShow} id="BtnOffcanvas">
              <IoIosMenu />
            </Button>
            <Offcanvas show={Show} onHide={handleHide}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Links</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <div className="d-flex flex-column ">
                  <Link
                    to={"/"}
                    className="text-decoration-none"
                    onClick={handleHide}
                  >
                    <div className="btn btn-dark my-1">Home</div>
                  </Link>
                  <Link
                    to={"/Clothes"}
                    className="text-decoration-none"
                    onClick={handleHide}
                  >
                    <div className="btn btn-dark my-1">Clothes</div>
                  </Link>
                  <Link
                    to={"/Electronics"}
                    className="text-decoration-none"
                    onClick={handleHide}
                  >
                    <div className="btn btn-dark my-1">Electronics</div>
                  </Link>
                  <Link
                    to={"/Furniture"}
                    className="text-decoration-none"
                    onClick={handleHide}
                  >
                    <div className="btn btn-dark my-1">Furniture</div>
                  </Link>
                  <Link
                    to={"/Miscellaneous"}
                    className="text-decoration-none"
                    onClick={handleHide}
                  >
                    <div className="btn btn-dark my-1">Miscellaneous</div>
                  </Link>
                  <Link
                    to={"/Shoes"}
                    className="text-decoration-none"
                    onClick={handleHide}
                  >
                    <div className="btn btn-dark my-1">Shoes</div>
                  </Link>
                </div>
              </Offcanvas.Body>
            </Offcanvas>
          </Navbar>
        </Container>
      </div>
      <hr />
    </>
  );
}

export default Header;
