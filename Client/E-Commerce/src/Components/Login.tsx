import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState<String>("");
  const [password, setPassword] = useState<String>("");
  const Navigation = useNavigate();
  return (
    <>
      <Container
        className="d-flex justify-content-center bg-dark w-25 text-light rounded p-5"
        style={{ height: "30pc" }}
      >
        <Row>
          <Col>
            <h3
              style={{ fontWeight: "bolder", fontSize: "2pc" }}
              className="text-center"
            >
              Shopify
            </h3>
            <p style={{ fontWeight: "bolder" }}>Login</p>
            <Form style={{ width: "20pc" }}>
              <Form.Control
                type="text"
                placeholder="Email"
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
            </Form>
            <div className="d-flex justify-content-between">
              <div
                className="btn btn-outline-warning"
                onClick={() => {
                  fetch("http://localhost:3000/Login", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      Email: email,
                      Password: password,
                    }),
                  })
                    .then((res) => {
                      return res.json();
                    })
                    .then((data) => {
                      localStorage.setItem("user", JSON.stringify(data));
                      localStorage.setItem("Jwt", data?.Token);
                      Navigation("/");
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
              >
                Login
              </div>
              <Link to={"/"}>
                <div className="btn btn-outline-primary">Cancel</div>
              </Link>
            </div>
            <p style={{ fontWeight: "bolder" }} className="my-3">
              Not Registered? <Link to={"/SignUp"}>SignUp</Link>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
