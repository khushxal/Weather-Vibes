import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";
function Landing() {
  return (
    <div
      id="container-home"
      className="container d-flex flex-column justify-content-center text-center"
    >
      <div className="">
        <h1 className="display-1 fw-bold">
          Jump into your world with your vibes
        </h1>
        <p className="col-md-8 fs-4"></p>
        <Link to={"/login"}>
          <button className="btn btn-outline-dark btn-lg">Get Ready</button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
