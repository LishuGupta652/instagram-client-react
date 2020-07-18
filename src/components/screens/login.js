import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="form login-form">
        <div className="container">
          <div className="inner-form">
            <form>
              <h2>Baten login</h2>
              <section>
                <label for="email"></label>
                <input type="email" placeholder="Enter your email" id="email" />
              </section>

              <section>
                <label for="password"> </label>
                <input
                  type="password"
                  placeholder="Enter your Password"
                  id="password"
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
