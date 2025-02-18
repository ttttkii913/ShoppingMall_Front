import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="navbar">
      <div className="navbar-item" onClick={() => handleNavigation("/")}>
        <div>홈</div>
      </div>
      <div className="navbar-item" onClick={() => handleNavigation("/category")}>
        <div>카테고리</div>
      </div>
      <div className="navbar-item" onClick={() => handleNavigation("/like")}>
        <div>좋아요</div>
      </div>
      <div className="navbar-item" onClick={() => handleNavigation("/login")}>
        <div>마이</div>
      </div>
    </div>
  );
};

export default Navbar;
