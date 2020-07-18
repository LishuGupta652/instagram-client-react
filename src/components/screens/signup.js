import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <div className="form signup-form">
        <div className="container">
          <div className="inner-form">
            <form>
              <h2>Baten Sign up</h2>
              <section>
                <label for="name"></label>
                <input type="text" placeholder="Enter your name" id="name" />
              </section>

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
                <Link to="/login">Already have a account? Login here</Link>
              </h5>
            </form>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Signup;
