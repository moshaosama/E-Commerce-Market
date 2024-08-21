import { useEffect, useState } from "react";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import { Products } from "../interface";
import "../App.css";
import { Link } from "react-router-dom";

function Home() {
  const [Product, setProduct] = useState<Products | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/Product")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProduct({ Products: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Container>
        <Carousel className="rounded">
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ height: "400px" }}
              src="https://res.cloudinary.com/dvyozjjma/image/upload/v1722687674/1722687677537_1721277206951_banner4.jpg"
              alt="Image One"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              style={{ height: "400px" }}
              src="https://res.cloudinary.com/dvyozjjma/image/upload/v1723968129/1723968129453_New_Project_8.jpg"
              alt="Image Two"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              style={{ height: "400px" }}
              src="https://res.cloudinary.com/dvyozjjma/image/upload/v1723968336/1723968336449_1721277298204_banner.jpg "
              alt="Image Two"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              style={{ height: "400px" }}
              src="https://res.cloudinary.com/dvyozjjma/image/upload/v1723967892/1723967891238_New_Project_6.jpg "
              alt="Image Two"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
      <Container>
        <div className="d-flex">
          <div>
            <Row>
              <Col>
                <div>
                  <Card style={{ border: "0px" }}>
                    <Card.Body>
                      <img
                        src="https://fullstack-ecommerce.netlify.app/static/media/banner1.957b2952d2e9b8c1f445.jpg"
                        alt=""
                      />
                    </Card.Body>
                  </Card>
                  <Card style={{ border: "0px" }}>
                    <Card.Body>
                      <img
                        src="https://fullstack-ecommerce.netlify.app/static/media/banner2.23a22290d952eb371fc6.jpg"
                        alt=""
                      />
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            </Row>
          </div>
          <div>
            <Row
              style={{
                overflowY: "scroll",
                height: "53pc",
                overflowX: "hidden",
              }}
              className="my-3"
            >
              {Product ? (
                Product?.Products?.data?.map((el) => {
                  return (
                    <>
                      <Col md="4" className="my-3">
                        <Link
                          to={`/Product/${el?._id}/${el?.category?.name}`}
                          className="text-decoration-none"
                        >
                          <Card style={{ width: "18rem", cursor: "pointer" }}>
                            <Card.Img variant="top" src={el?.category?.image} />
                            <Card.Body>
                              <Card.Title>{el?.title}</Card.Title>
                              <p className="text-danger">In stock</p>
                              <Card.Text>
                                <h5 style={{ fontWeight: "bolder" }}>
                                  {el?.price}$
                                </h5>
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </Link>
                      </Col>
                    </>
                  );
                })
              ) : (
                <p
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    width: "50pc",
                    fontSize: "5pc",
                    color: "gray",
                    fontWeight: "bolder",
                  }}
                >
                  Loading.....
                </p>
              )}
            </Row>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Home;
