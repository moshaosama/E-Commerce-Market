import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ResetPass() {
  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [passConf, setpassConf] = useState("");
  const token = localStorage.getItem("Jwt");
  const Navigation = useNavigate();
  function handleClick() {
    fetch("http://localhost:3000/Login/updatePasssword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify({
        currentPassword: currentPass,
        newPassword: newPass,
        passConf: passConf,
      }),
    });
    localStorage.clear();
    Navigation("/Login");
  }
  return (
    <>
      <Container>
        <div style={{ border: "1px solid #aaa " }} className="rounded p-3 my-3">
          <h4 className="text-center" style={{ fontWeight: "bolder" }}>
            Reset your password
          </h4>
          <Form>
            <Form.Label>Current password </Form.Label>
            <Form.Control
              type="password"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setCurrentPass(e.target.value)
              }
            />
            <Form.Label>new password </Form.Label>
            <Form.Control
              type="password"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNewPass(e.target.value)
              }
            />
            <Form.Label>password confirmation</Form.Label>
            <Form.Control
              type="password"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setpassConf(e.target.value)
              }
            />
          </Form>
          <div className="btn btn-primary my-4" onClick={handleClick}>
            Confirm
          </div>
        </div>
      </Container>
    </>
  );
}

export default ResetPass;
