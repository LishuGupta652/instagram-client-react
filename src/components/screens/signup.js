import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Signup = () => {
  const history = useHistory("");
  const [name, setName] = useState(
    localStorage.getItem("name") ? localStorage.getItem("name") : ""
  );
  const [email, setEmail] = useState(
    localStorage.getItem("email") ? localStorage.getItem("email") : ""
  );
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoding] = useState(false);

  const postSignupData = (e) => {
    e.preventDefault();

    fetch("/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
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
          setSuccess(data.message);
          setName("");
          setEmail("");
          setPassword("");
          history.push("/login");
        }
      });
  };

  return (
    <div>
      <div className="form signup-form">
        <div className="container">
          <div className="inner-form">
            <form onSubmit={postSignupData}>
              <h2>Baten Sign up</h2>
              <h5 className="error">{error}</h5>
              <h5 className="success">{success}</h5>
              <section>
                <label htmlFor="name"></label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  placeholder="Enter your name"
                  onChange={(e) => {
                    setName(e.target.value);
                    localStorage.setItem("name", e.target.value);
                  }}
                />
              </section>

              <section>
                <label htmlFor="email"></label>
                <input
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
                <label htmlFor="password"> </label>
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
                <Link to="/login">Already have a account? Login here</Link>
              </h5>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
