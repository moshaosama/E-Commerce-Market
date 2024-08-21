import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { onlyProducts, Products, Reviews } from "../interface";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import "../App.css";
import { LuShoppingCart } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";

function Product() {
  const id = useParams();
  const name = useParams();
  const User = JSON.parse(localStorage.getItem("user")!);
  const [product, setProduct] = useState<onlyProducts | null>(null);
  const [active, setActive] = useState<String>("");
  const [counter, setCounter] = useState(0);
  const [productName, setProductName] = useState<Products | null>(null);
  const [Review, setReview] = useState("");
  const [getReview, setGetReview] = useState<Reviews | null>(null);
  const Sizes = ["S", "M", "L", "XL", "XXL"];
  const token = localStorage.getItem("Jwt");
  const headers = token ? { Authorization: `${token}` } : undefined;

  function addtoCartBtn() {
    fetch(`http://localhost:3000/Cart/${id?._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    }).catch((err) => {
      console.log(err);
    });
  }

  function handleDeleteReview(_id: string) {
    fetch(`http://localhost:3000/Review/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((err) => {
      console.log(err);
    });
  }

  useEffect(() => {
    fetch(`http://localhost:3000/Product/${id?._id}/${name?.name}`, {
      method: "GET",
      headers: headers,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProductName({ Products: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    fetch(`http://localhost:3000/Product/${id?._id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    fetch("http://localhost:3000/Review", {
      method: "GET",
      headers: token ? { Authorization: token } : undefined,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setGetReview({ Review: data });
      });
  }, []);

  return (
    <>
      <Container>
        <div className="d-flex ">
          <img
            src={product?.data?.category?.image}
            alt=""
            className="w-25 rounded "
            style={{ fontWeight: "bolder" }}
          />
          <div className="mx-5">
            <h4>{product?.data?.title}</h4>
            <p>
              Brands:{" "}
              <span style={{ fontWeight: "bolder" }}>
                {product?.data?.category?.name}
              </span>
            </p>
            <p>
              Price:{" "}
              <span className="text-danger" style={{ fontWeight: "bolder" }}>
                {product?.data?.price} $
              </span>
            </p>
            <p
              className="rounded"
              style={{
                display: "inline-block",
                color: "#00b853",
                background: "#e5f8ed",
              }}
            >
              In stock
            </p>
            <p className="w-75">Rs: {product?.data?.description}</p>
            <p>
              Size:
              {Sizes?.map((el) => {
                return (
                  <>
                    <div
                      className={`btn btn-outline-dark mx-1 ${
                        active === el ? "active" : ""
                      }`}
                      onClick={() => setActive(el)}
                    >
                      {el}
                    </div>
                  </>
                );
              })}
            </p>
            <div className="d-flex">
              {/* Counter */}
              <div className="d-flex align-items-center">
                <div
                  className="btn btn-dark mx-4"
                  onClick={() => setCounter(counter - 1)}
                >
                  -
                </div>
                <p style={{ height: "0.5pc" }}>{counter}</p>
                <div
                  className="btn btn-dark mx-4"
                  onClick={() => setCounter(counter + 1)}
                >
                  +
                </div>
              </div>
              {/*/////*/}

              {/* Add to Cart */}
              <div
                className="btn btn-danger d-flex align-items-center mx-5"
                style={{ fontWeight: "bolder" }}
                onClick={addtoCartBtn}
              >
                <span className="mx-2">
                  <LuShoppingCart />
                </span>
                Add to Cart
              </div>
              {/*/////*/}
              <div className="btn btn-dark">
                <CiHeart />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <hr />
      <Container style={{ backgroundColor: "#f7f2ff" }} className="rounded p-3">
        <h6 style={{ fontWeight: "bolder" }} className="mx-3">
          Review
        </h6>
        <h5 style={{ fontWeight: "bolder" }} className="my-5">
          Customer questions & answers
        </h5>
        <Form className="d-flex flex-column">
          <Form.Label style={{ fontWeight: "bolder" }}>Add a review</Form.Label>
          <textarea
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setReview(e.target.value)
            }
            name=""
            id=""
            className="w-75 rounded p-4"
            placeholder="Write a review"
          ></textarea>
        </Form>
        <div
          className="btn text-light my-3"
          style={{ backgroundColor: "#53348c", borderRadius: " 10px" }}
          onClick={() => {
            fetch("http://localhost:3000/Review", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: User?.data?.userName,
                title: name?.name,
                review: Review,
              }),
            }).then((res) => {
              return res.json();
            });
          }}
        >
          Submit a review
        </div>
        {/*Collection*/}
        {/*Location*/}
        {/*Footer*/}
        {token ? (
          getReview?.Review?.data ? (
            <div>
              {getReview?.Review?.data?.map((el) => {
                return (
                  <>
                    <div
                      className="text-light d-flex justify-content-between align-items-center p-2 my-2"
                      style={{
                        backgroundColor: "#53348c",
                        borderRadius: " 10px",
                      }}
                    >
                      <div>
                        <p>
                          Created by:
                          <span style={{ fontWeight: "bolder" }}>
                            {el?.Name}
                          </span>
                        </p>
                        <h6>{el?.Review}</h6>
                      </div>
                      <div
                        className="btn btn-danger"
                        onClick={() => handleDeleteReview(el._id)}
                      >
                        Delete
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          ) : (
            <h3 className="text-danger text-center">
              You don't have any review right now
            </h3>
          )
        ) : (
          <h3 className="text-danger text-center">Please login First</h3>
        )}
      </Container>
      <hr />
      <Container>
        <h6 style={{ fontWeight: "bolder" }} className="mx-3">
          RELATED PRODUCTS
        </h6>
        {token ? (
          <Row>
            {productName?.Products?.data?.map((el) => {
              return (
                <Col lg="4" md="4" sm="6" className="my-3 mx-5">
                  <Card style={{ width: "18rem", cursor: "pointer" }}>
                    <Card.Img variant="top" src={el?.category?.image} />
                    <Card.Body>
                      <Card.Title>{el?.title}</Card.Title>
                      <p className="text-danger">In stock</p>
                      <Card.Text>
                        <h5 style={{ fontWeight: "bolder" }}>{el?.price}$</h5>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        ) : (
          <h3 className="text-danger text-center">Please login First</h3>
        )}
      </Container>
    </>
  );
}

export default Product;
