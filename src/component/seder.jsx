import React from "react";

const Seder = ({ dark = false, contents, title }) => {
  return (
    <header className={`header ${dark ? "dark" : ""}`}>
      <div>{contents ?? "Logo"}</div>
      <div className="nav_menu poppins-semibold">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">About</a>
        <a href="#">Contact us</a>
        <div className="buttons">
          <button>Login</button>
          <button>Sign up</button>
        </div>
      </div>
    </header>
  );
};

export default Seder;
