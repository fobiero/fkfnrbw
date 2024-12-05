import React from "react";
import { Link } from "react-router";

import "../../assets/css/Login.css";
import RegisterPage from "./RegisterPage";
import ErrorPage from "./ErrorPage";

const LoginPage = () => {
  return (
    <>
      <div className="container login-data">
        <div className="row">
          <div className="col-md-4 offset"></div>
          <div className="col-md-4">
            <div className="loginPage">
              <div className="login-header">
                <h3>Login</h3>
              </div>
              <form className="form-data">
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
                <div className="form-submit">
                  <button type="submit" className="form-sb-btn">
                    Login
                  </button>
                </div>
              </form>

              <div className="form-footer-fgtpd ft-fgpsd">
                <Link
                  className="ft-psd ftrgbtn"
                  to="/notfound"
                  element={<ErrorPage />}
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="form-footer-regpg ft-fgpsd">
                Have an Account?{" "}
                <Link
                  className="form-footer-regbtn ftrgbtn ftrgbtn-reg"
                  to="/register"
                  element={<RegisterPage />}
                >
                  Register
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

export default LoginPage;
