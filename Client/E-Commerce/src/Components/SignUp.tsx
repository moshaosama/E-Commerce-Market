import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState<String>("");
  const [name, setName] = useState<String>("");
  const [password, setPassword] = useState<String>("");
  const [PasswordConfirmation, setPassCon] = useState<String>("");
  return (
    <Container
      className="d-flex justify-content-center bg-dark w-25 text-light rounded p-5"
      style={{ height: "40pc" }}
    >
      <Row>
        <Col>
          <h3
            style={{ fontWeight: "bolder", fontSize: "2pc" }}
            className="text-center"
          >
            Shopify
          </h3>
          <p style={{ fontWeight: "bolder" }}>SignUp</p>
          <Form style={{ width: "20pc" }}>
            <Form.Control
              type="text"
              placeholder="Name"
              onChange={(el: React.ChangeEvent<HTMLInputElement>) =>
                setName(el.target.value)
              }
            />
            <Form.Control
              type="text"
              placeholder="Email"
              className="my-5"
              onChange={(el: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(el.target.value)
              }
            />
            <Form.Control
              type="password"
              placeholder="Password"
              className="my-5"
              onChange={(el: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(el.target.value)
              }
            />
            <Form.Control
              type="password"
              placeholder="Password Confirmation"
              className="my-5"
              onChange={(el: React.ChangeEvent<HTMLInputElement>) =>
                setPassCon(el.target.value)
              }
            />
          </Form>
          <div className="d-flex justify-content-between">
            <div
              className="btn btn-outline-warning"
              onClick={() => {
                fetch("http://localhost:3000/SignUp", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    userName: name,
                    Email: email,
                    Password: password,
                    PasswordConfirmation: PasswordConfirmation,
                  }),
                })
                  .then(() => {
                    console.log("Succsss");
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              SignUp
            </div>
            <Link to={"/"}>
              <div className="btn btn-outline-primary">Cancel</div>
            </Link>
          </div>
          <p style={{ fontWeight: "bolder" }} className="my-3">
            Not Registered? <Link to={"/Login"}>Signin</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUp;
