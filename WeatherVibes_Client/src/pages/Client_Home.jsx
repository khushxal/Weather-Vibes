import React, { useState } from "react";
import { IoSearchCircle } from "react-icons/io5";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";

import "../css/Client_Home.css";
function client_home() {
  const [isClicked, setIsClicked] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchedMusic, setSearchedMusic] = useState([]);

  function checkClick() {
    setIsClicked(!isClicked);
  }

  function handleChange(e) {
    try {
      const { value } = e.target;
      setSearchTitle(value);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSubmit() {
    try {
      if (!isSearched) {
        setIsSearched(true);
      }
      const res = await axios.get(
        `https://v1.nocodeapi.com/khushal1010/spotify/xGXFDJvkPngbgPNP/search?q=${searchTitle}`
      );
    } catch (error) {
      console.log(error);
    }
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
                type="text"
                name="searchTitle"
                placeholder="Search For Music"
                aria-label="Search"
                onChange={handleChange}
                value={searchTitle}
              />
              <button
                className="btn text-light"
                type="submit"
                onClick={handleSubmit}
              >
                Search
              </button>
            </>
          )}
        </div>
      </div>
      <div className="row rounded-3 mx-3 mx-lg-0 p-3">
        <div className="row text-center">
          <div className="col">
            {isSearched ? (
              <Link to={""}>Search</Link>
            ) : (
              <Link to={"trending"}>Trending</Link>
            )}
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
        <div className="row">
          <div className="col text-center">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
}

export default client_home;
