import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../images/logo.svg";
import close from "../../images/close.svg";
import ham from "../../images/hamburger.svg";

const NavBar = () => {
  const [click, setClick] = useState(true);
  const openNav = () => setClick(!click);
  return (
    <>
      <div className="desktop-navbar">
        <div className="navbar-heading">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          {/* <h1>
                Meals <span className="heading-span">App</span>
            </h1> */}
        </div>
        <div className="navbar-link-con">
          <ul>
            <Link to="/" className="navbar-link">
              <li>Home</li>
            </Link>
            <Link to="/categories" className="navbar-link">
              <li>Categories</li>
            </Link>
            <Link to="/random" className="navbar-link">
              <li>Random</li>
            </Link>
          </ul>
        </div>
      </div>

      <div className="mobile-nav">
        <div className="mobile-navbar-heading">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>

          <img src={ham} alt="#" onClick={openNav} className="move" />
        </div>
        <div className={click ? "sidenav" : "open-sidenav"}>
          <div className="menu-container">
            <p className="menu">Menu</p>
            <img src={close} alt="#" onClick={openNav} className="move" />
          </div>
          <div className="mobile-navbar-link-con">
            <ul>
              <Link to="/" className="mobile-navbar-link" onClick={openNav}>
                <li>Home</li>
              </Link>
              <Link
                to="/categories"
                className="mobile-navbar-link"
                onClick={openNav}
              >
                <li>Categories</li>
              </Link>
              <Link
                to="/random"
                className="mobile-navbar-link"
                onClick={openNav}
              >
                <li>Random</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
