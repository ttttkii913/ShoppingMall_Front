import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-item">
        <div>홈</div>
      </div>
      <div className="navbar-item">
        <div>카테고리</div>
      </div>
      <div className="navbar-item">
        <div>좋아요</div>
      </div>
      <div className="navbar-item">
        <div>마이</div>
      </div>
    </div>
  );
};

export default Navbar;
