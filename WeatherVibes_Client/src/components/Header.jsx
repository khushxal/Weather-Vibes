import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";
import { useAuth } from "../store/auth";
function Header() {
  const { LoggedIn } = useAuth();
  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <Link className="navbar-brand" to={"/"}>
            <div className="fs-1">WeatherVibes</div>
          </Link>
        </div>
        <div className="d-flex align-items-center justify-content-between gap-3">
          <div>
            <Link className="nav-item" to={"/login"}>
              <div className="nav-link d-flex align-items-center justify-content-between gap-2">
                Login
              </div>
            </Link>
          </div>
          <div>
            <Link className="nav-item" to={"/register"}>
              <div className="nav-link d-flex align-items-center justify-content-between gap-2">
                SignUp
              </div>
            </Link>
          </div>
          <div>
            <Link className="nav-item" to={"/about"}>
              <div className="nav-link d-flex align-items-center justify-content-between gap-2 me-2">
                Our-Community
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
