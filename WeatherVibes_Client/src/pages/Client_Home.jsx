import React, { useState } from "react";
import { IoSearchCircle } from "react-icons/io5";
import "../css/Client_Home.css";
function client_home() {
  const [isClicked, setIsClicked] = useState(false);

  function checkClick() {
    setIsClicked(!isClicked);
  }

  return (
    <div id="container-client-home" className="container">
      <div>
        <div className="row">
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
      </div>
    </div>
  );
}

export default client_home;
