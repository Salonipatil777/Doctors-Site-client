import React from "react";
import logo from "../images/Raj-hospital.png";
import logoWhite from "../images/logo-white.png";
import { Link } from "react-router-dom";
import "../style.css";

const Navbar = () => {

  return (
    <>
      <header className="header header-transparent rs-nav">
        <div className="navbar-expand-lg bg-light navbar-expand-md fixed-top">
          <div className="menu-bar clearfix">
            <div className="container-fluid clearfix">
              <div className="menu-logo logo-dark">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
              <button
                className="navbar-toggler collapsed menuicon justify-content-end"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#menuDropdown"
                aria-controls="menuDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
              <div className="nav-search-bar">
                <form action="#">
                  <input
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Type to search"
                  />
                  <span>
                    <i className="ti-search"></i>
                  </span>
                </form>
                <span id="searchRemove">
                  <i className="ti-close"></i>
                </span>
              </div>
              <div
                className="menu-links navbar-collapse collapse justify-content-end"
                id="menuDropdown"
              >
                <div className="menu-logo">
                  <Link to="/">
                    <img src={logoWhite} alt="" />
                  </Link>
                </div>
                <ul className="nav navbar-nav">
                  <li className="active">
                    <Link to="/">Home</Link>
                  </li>
                  <li></li>
                  <li>
                    <Link to="">
                      About Us<i className="fas fa-plus"></i>
                    </Link>
                    <ul className="sub-menu">
                      <li className="add-menu-left">
                        <ul>
                          <li>
                            <Link to="/about">
                              <span>About Us</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/team">
                              <span>Our Team</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/faq">
                              <span>FAQ's</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/booking">
                              <span>Booking</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/login">
                              <span>Login</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="">
                      Services <i className="fas fa-plus"></i>
                    </Link>
                    <ul className="sub-menu">
                      <li className="add-menu-left">
                        <ul>
                          <li>
                            <Link to="/service">
                              <span>Service</span>{" "}
                            </Link>
                          </li>
                          <li>
                            <Link to="/serviceDetails">
                              <span>Service Detail</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="">
                      Blog<i className="fas fa-plus"></i>
                    </Link>
                    <ul className="sub-menu left">
                      <li>
                        <Link to="/blog">
                          <span>Blog</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/blogDetails">
                          <span>Blog Details</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/latestNews">Latest News</Link>
                  </li>
                  <li>
                    <Link to="/gallary">Gallery</Link>
                  </li>
                  <li>
                    <Link to="/contactUs">Contact Us</Link>
                  </li>
                </ul>
                <ul className="social-media">
                  <li>
                    <Link
                      target="blank"
                      to="https://www.facebook.com/"
                      className="btn btn-primary"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="blank"
                      to="https://www.google.com/"
                      className="btn btn-primary"
                    >
                      <i className="fab fa-google"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="blank"
                      to="https://www.linkedin.com/"
                      className="btn btn-primary"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="blank"
                      to="https://twitter.com/"
                      className="btn btn-primary"
                    >
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                </ul>
                <div className="menu-close">
                  <i className="ti-close"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
