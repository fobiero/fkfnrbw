import React from "react";
import { Link } from "react-router";

import Home from "../pages/Home";
import Fixtures from "../pages/Fixture";
import Teams from "../pages/Teams";
import Standings from "../pages/Standings";
import News from "../pages/News";
import Contact from "../pages/Contact";

import LoginPage from "../pages/auth/LoginPage";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navNavbar">
        <div className="container container-content">
          <Link className="navbar-brand navbar-logo-img">
            <img src={require("../assets/images/fkf-logo.png")} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link element={<Home />} to="/" className="nav-link">
                Home
              </Link>
              <Link element={<Teams />} to="/teams" className="nav-link">
                Clubs
              </Link>
              <Link element={<Fixtures />} to="/fixtures" className="nav-link">
                Fixtures
              </Link>
              <Link
                element={<Standings />}
                to="/standings"
                className="nav-link"
              >
                Standings
              </Link>
              <Link element={<News />} to="/news" className="nav-link">
                News
              </Link>
              <Link element={<Contact />} to="/contact" className="nav-link">
                Contact Us
              </Link>
            </ul>
            <div className="d-flex">
              <Link
                to="/login"
                className="nav-loginbtn"
                element={<LoginPage />}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
