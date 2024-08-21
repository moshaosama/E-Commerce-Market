import { useEffect, useState } from "react";
import { Products } from "../interface";
import { Card, Col, Container, Row } from "react-bootstrap";

function Cart() {
  const [Carts, setCart] = useState<Products | null>(null);
  const token = localStorage.getItem("Jwt");
  function handleDeleteCart(_id: string) {
    fetch(`http://localhost:3000/Cart/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((err) => {
      console.log(err);
    });
  }

  useEffect(() => {
    fetch("http://localhost:3000/Cart", {
      method: "GET",
      headers: token ? { Authorization: token } : undefined,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCart({ Products: data });
      });
  }, []);
  Carts?.Products?.data?.map((el) => {
    el?.data?.map((el: any) => {
      console.log(el?.category?.image);
    });
  });
  return (
    <>
      <Container>
        {token ? (
          <Row>
            {Carts?.Products?.data?.map((el1) =>
              el1?.data?.map((el2: any) => {
                return (
                  <Col md="2" className="my-3 mx-5">
                    <Card style={{ width: "18rem", cursor: "pointer" }}>
                      <Card.Img variant="top" src={el2?.category?.image} />
                      <Card.Body>
                        <Card.Title>{el2?.title}</Card.Title>
                        <p className="text-danger">In stock</p>
                        <Card.Text>
                          <h5 style={{ fontWeight: "bolder" }}>
                            {el2?.price}$
                          </h5>
                        </Card.Text>
                        <div
                          className="btn btn-outline-danger"
                          onClick={() => handleDeleteCart(el1?._id)}
                        >
                          Delete
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })
            )}
          </Row>
        ) : (
          <h3 className="text-danger text-center">Please login First</h3>
        )}
      </Container>
    </>
  );
}

export default Cart;
