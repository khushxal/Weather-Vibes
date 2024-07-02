import React, { useState } from "react";
import { IoSearchCircle } from "react-icons/io5";
import { Link, Outlet } from "react-router-dom";
import "../css/Client_Home.css";
function client_home() {
  const [isClicked, setIsClicked] = useState(false);

  function checkClick() {
    setIsClicked(!isClicked);
  }

  return (
    <div id="container-client-home" className="container">
      <div className="row mb-2 mx-lg-0 mx-2">
        <div className="col-2 col-lg-1 me-0">
          <button onClick={checkClick} className="btn" id="search-btn">
            <IoSearchCircle></IoSearchCircle>
          </button>
        </div>
        <div
          id="search-bar"
          className={`col-10 col-lg-11 d-flex ${isClicked ? "show" : ""}`}
        >
          {isClicked && (
            <>
              <input
                className="form-control"
                type="search"
                placeholder="Search For Music"
                aria-label="Search"
              />
              <button className="btn text-light" type="submit">
                Search
              </button>
            </>
          )}
        </div>
      </div>
      <div className="row bg-light rounded-3 mx-3 mx-lg-0 p-3">
        <div className="row text-center">
          <div className="col">
            <Link to={"trending"}>Trending</Link>
          </div>
          |
          <div className="col">
            <Link to={"weather"}>Weather</Link>
          </div>
          |
          <div className="col">
            <Link to={"favourite"}>Favourite</Link>
          </div>
        </div>
        <hr />
        <div className="row text-center">
          <div className="col">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
}

export default client_home;
