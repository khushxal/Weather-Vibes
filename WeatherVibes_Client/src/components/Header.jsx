import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";
function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg mx-2 mt-1 rounded-5">
        <Link className="navbar-brand mx-2" to={"/"}>
          <img
            width="60"
            height="60"
            src="https://img.icons8.com/3d-fluency/94/cloud.png"
            alt="cloud"
          />
          <span className="mx-2 fs-2 text-light">Weather Vibes</span>
        </Link>
        <button
          className="navbar-toggler me-2 rounded-5"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 ms-2 mb-lg-0 fs-4">
            <hr />
            <Link className="nav-item" to={"/"}>
              <li className="nav-link">
                <img
                  className="me-2"
                  width="20"
                  height="20"
                  src="https://img.icons8.com/deco/48/home.png"
                  alt="home"
                />
                Home
              </li>
            </Link>
            <Link className="nav-item" to={"/login"}>
              <li className="nav-link">
                <img
                  width="20"
                  height="20"
                  className="me-2"
                  src="https://img.icons8.com/deco/48/enter-2.png"
                  alt="enter-2"
                />
                Login
              </li>
            </Link>
            <Link className="nav-item" to={"/register"}>
              <li className="nav-link">
                <img
                  width="20"
                  height="20"
                  className="me-2"
                  src="https://img.icons8.com/deco/48/task.png"
                  alt="task"
                />
                SignUp
              </li>
            </Link>
            <Link className="nav-item" to={"/dashboard"}>
              <li className="nav-link">
                <img
                  width="20"
                  height="20"
                  className="me-2"
                  src="https://img.icons8.com/?size=100&id=mpeojql23sni&format=png&color=000000"
                  alt="task"
                />
                Music
              </li>
            </Link>
            <Link className="nav-item" to={"/about"}>
              <li className="nav-link">
                <img
                  width="20"
                  height="20"
                  className="me-2"
                  src="https://img.icons8.com/deco/48/info.png"
                  alt="task"
                />
                About Us
              </li>
            </Link>
            <Link className="nav-item" to={"/logout"}>
              <li className="nav-link">
                <img
                  width="20"
                  height="20"
                  className="me-2"
                  src="https://img.icons8.com/deco/48/info.png"
                  alt="task"
                />
                Logout
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
