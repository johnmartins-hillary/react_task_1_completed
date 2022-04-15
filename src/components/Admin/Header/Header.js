import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header_container">
      <div className="header_left">digg</div>
      <div className="header_right">
        <button className="save">save & share</button>
      </div>
    </div>
  );
};

export default Header;
