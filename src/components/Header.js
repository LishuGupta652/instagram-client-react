import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="header-inner">
            <div className="flex">
              <div className="left">
                <p>Header</p>
              </div>
              <div className="right">
                <p className="login">Log in</p>
                <p className="signup">Sign up</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
