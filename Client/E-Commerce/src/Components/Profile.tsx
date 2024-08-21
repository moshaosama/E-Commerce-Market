import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const User = JSON.parse(localStorage.getItem("user")!);

  function handleClickEdit() {
    fetch(`http://localhost:3000/Login/${User?.data?._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data));
      });
  }

  return (
    <>
      <Container>
        <div>
          <img
            src="/336079467_1977797772559867_6414657154636989072_n.jpg"
            alt=""
            style={{
              width: " 10%",
              borderRadius: "10pc",
              height: "9pc",
              border: "1px solid ",
              boxShadow: " 0 12px 24px rgba(0, 0, 0, 0.2)",
            }}
          />
        </div>
        <div style={{ border: "1px solid #aaa " }} className="rounded p-3 my-3">
          <h6 style={{ fontWeight: "bolder" }}>Contact Details</h6>
          <Form>
            <div className="d-flex justify-content-between">
              <p>
                <Form.Label style={{ fontWeight: "bolder" }}>
                  userName
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder={User?.data?.userName}
                  style={{ width: "37pc" }}
                  onChange={(e) => setName(e.target.value)}
                  id="inputName"
                />
              </p>
              <p>
                <Form.Label style={{ fontWeight: "bolder" }}>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={User?.data?.Email}
                  style={{ width: "41pc" }}
                  onChange={(e) => setEmail(e.target.value)}
                  id="inputEmail"
                />
              </p>
            </div>
            <Link to={"/resetPassword"} className="text-decoration-none">
              Reset Your Password
            </Link>
          </Form>
          <p className="d-flex justify-content-center my-5">
            <div
              className="btn btn-outline-dark w-25"
              onClick={handleClickEdit}
            >
              Edit
            </div>
          </p>
        </div>
      </Container>
    </>
  );
}

export default Profile;
