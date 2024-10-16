import { useEffect, useState } from "react";
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
  const handleChange = (e: any) => {
    const file = e.target.files[0];
    if (!file) {
      console.log("No file selected");
      return;
    }
    const formData = new FormData();
    formData.append("image", file);

    fetch(`http://localhost:3000/updateImage/${User?.data?._id}`, {
      method: "PUT",
      body: formData,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data));
      });
  };
  return (
    <>
      <Container>
        <div>
          <input
            type="file"
            style={{
              width: "4pc",
              position: "absolute",
              top: "18pc",
              left: "21pc",
              borderRadius: "10pc",
            }}
            onChange={handleChange}
          />
          <img
            src={
              User?.data?.image
                ? User?.data?.image
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMUDp3aV5EOTHgkQp6AB782rSKOyhhkdkx8Q&s"
            }
            alt=""
            className="p-1 bg-dark"
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
                  placeholder={
                    User?.data?.userName
                      ? User?.data?.userName
                      : "you don't have any userName"
                  }
                  style={{ width: "37pc" }}
                  onChange={(e) => setName(e.target.value)}
                  id="inputName"
                />
              </p>
              <p>
                <Form.Label style={{ fontWeight: "bolder" }}>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={
                    User?.data?.Email
                      ? User?.data?.Email
                      : "you don't have any Email"
                  }
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
