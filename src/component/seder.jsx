import React from "react";

const Seder = ({ dark = false, contents, title }) => {
  return (
    <header className={`header ${dark ? "dark" : ""}`}>
      <div>{contents ?? "Logo"}</div>
      <div className="nav_menu poppins-semibold">
        <a href="#">Technology</a>
        <a href="#">About</a>
        <a href="#">Career</a>
        <div className="buttons">
          <button>Subscribe</button>
        </div>
      </div>
    </header>
  );
};

export default Seder;
