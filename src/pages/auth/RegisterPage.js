import React from "react";
import { Link } from "react-router";

import "../../assets/css/Login.css";
import LoginPage from "./LoginPage";

const RegisterPage = () => {
  return (
    <>
      <div className="container login-data">
        <div className="row">
          <div className="col-md-4 offset"></div>
          <div className="col-md-4">
            <div className="loginPage">
              <div className="login-header">
                <h3>Register</h3>
              </div>
              <form className="form-data">
                <div className="form-input">
                  <h6 className="form-input-tle">Username</h6>
                  <input
                    placeholder="Username"
                    className="form-username form-input-data"
                    type="text"
                    required
                  />
                </div>
                <div className="form-input">
                  <h6 className="form-input-tle">Email Address</h6>
                  <input
                    placeholder="Email Address"
                    className="form-email form-input-data"
                    type="email"
                    required
                  />
                </div>
                <div className="form-input">
                  <h6 className="form-input-tle">Password</h6>
                  <input
                    placeholder="Password"
                    className="form-password form-input-data"
                    type="password"
                    required
                  />
                </div>
                <div className="form-input">
                  <h6 className="form-input-tle">Confirm Password</h6>
                  <input
                    placeholder="Retype your Password"
                    className="form-password form-input-data"
                    type="password"
                    required
                  />
                </div>
                <div className="form-submit">
                  <button type="submit" className="form-sb-btn">
                    Create Account
                  </button>
                </div>
              </form>

              <div className="form-footer-regpg ft-fgpsd">
                Have an Account?{" "}
                <Link
                  className="form-footer-regbtn ftrgbtn ftrgbtn-reg"
                  to="/login"
                  element={<LoginPage />}
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 offset"></div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
