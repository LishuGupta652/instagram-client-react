import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory("");
  const [email, setEmail] = useState(
    localStorage.getItem("email") ? localStorage.getItem("email") : ""
  );
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoding] = useState(false);

  const postLoginData = (e) => {
    e.preventDefault();

    fetch("/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.error) {
          return setError(data.error);
        } else {
          setEmail("");
          setPassword("");
          history.push("/profile");
        }
      });
  };

  return (
    <>
      <div className="form login-form">
        <div className="container">
          <div className="inner-form">
            <form onSubmit={postLoginData}>
              <h2>Baten login</h2>
              <h5 className="error">{error}</h5>
              <section>
                <label for="email"></label>
                <input
                  autoFocus
                  id="email"
                  type="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    localStorage.setItem("email", e.target.value);
                  }}
                />
              </section>

              <section>
                <label for="password"> </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  placeholder="Enter your Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </section>

              <button type="submit">Log in</button>
              <h5 className="log">
                <Link to="/signup"> Don't have a account? Register here</Link>
              </h5>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
