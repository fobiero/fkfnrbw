import React from "react";
import { Link } from "react-router";

import Home from "../pages/Home";
import Fixtures from "../pages/Fixture";
import Teams from "../pages/Teams";
import Standings from "../pages/Standings";
import Dashboard from "../pages/Dashboard";

// import logo from "../assets/images/fkf-logo";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          {/* <Link to="/" className="nav-logo">
            <img src={logo} alt="Logo" />
          </Link> */}
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <div className="d-flex">
              <Link element={<Home />} to="/">
                Home
              </Link>
              <Link element={<Teams />} to="/teams">
                Clubs
              </Link>
              <Link element={<Fixtures />} to="/fixtures">
                Fixtures
              </Link>
              <Link element={<Standings />} to="/standings">
                Standings
              </Link>
              {/* login User  */}
              <Link element={<Dashboard />} to="/dashboard">
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
