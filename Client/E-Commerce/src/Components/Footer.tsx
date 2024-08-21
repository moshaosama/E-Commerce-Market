import { Container } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Container className="my-5">
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "#1c2331" }}
      >
        <section
          className="d-flex justify-content-between p-4"
          style={{ backgroundColor: "#6351ce" }}
        >
          <div
            className="me-5 d-flex justify-content-between align-items-center w-100"
            style={{ height: "1pc" }}
          >
            <span>Mosha only one in the world</span>

            <div className="d-flex">
              <a href="" className="mx-1 text-light">
                <FaFacebook />
              </a>
              <a className="mx-1 text-light">
                <FaInstagram />
              </a>
              <a className="mx-1 text-light">
                <FaTwitter />
              </a>
              <a className="mx-1 text-light">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Mo4aShop</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>This is a big Shop in the World</p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Products</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <a href="#!" className="text-white">
                    Collections
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    Electronics
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    Furniture
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    Miscellaneous
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <Link to={"/myProfile"} className="text-white">
                    MyAccount
                  </Link>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <i className="fas fa-home mr-3"></i> Cairo, 6October Carma
                  City
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i>{" "}
                  mohamedOSFekry@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i> +20 104365707
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </footer>
    </Container>
  );
}

export default Footer;
