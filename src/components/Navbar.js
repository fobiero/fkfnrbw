import React from "react";
import { Link } from "react-router";
import { FaUserCircle } from "react-icons/fa";

import Home from "../pages/Home";
import Fixtures from "../pages/Fixture";
import Teams from "../pages/Teams";
import Standings from "../pages/Standings";
import Dashboard from "../pages/Dashboard";

// import logo from "../assets/images/fkf-logo";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navNavbar">
        <div className="container container-content">
          <Link className="navbar-brand navar-logo" href="#">
            <img
              src={window.location.origin + "../assets/images/fkf-logo.png"}
            />
            Navbar
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
            </ul>
            <div className="d-flex">
              {/* login User  */}
              <Link
                element={<Dashboard />}
                to="/dashboard"
                className="nav-link nav-link-user"
              >
                <FaUserCircle />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
