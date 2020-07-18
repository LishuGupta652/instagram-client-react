import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="header-inner">
            <div className="flex">
              <div className="left">
                <Link to="/">
                  <p>Baten</p>
                </Link>
              </div>
              <div className="right">
                <Link to="/login">
                  <p className="login">Login</p>
                </Link>
                <Link to="/signup">
                  <p className="signup">Sign up</p>
                </Link>
                <Link to="/profile">
                  <p className="profile">Profile</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
