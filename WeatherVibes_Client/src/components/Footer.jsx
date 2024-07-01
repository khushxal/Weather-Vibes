import React from "react";
import "../css/Footer.css";
function Footer() {
  return (
    <div>
      <div className="footer fs-5 fw-bold rounded-5">
        <footer className="d-flex flex-wrap justify-content-between align-items-center p-2">
          <div className="col-md-4 d-flex align-items-center">
            <span className="mb-3 mb-md-0">
              WeatherVibes Inc © {new Date().getFullYear()} , by {"  "}
              <a href="https://khushxal.github.io/Khushal/">Khushal Verma</a>
            </span>
          </div>
          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="">
              <a className="" href="">
                <img src="icon-insta.gif" height="50" width="50" />
              </a>
            </li>
            <li className="">
              <a className="" href="#" />
              <img src="icon-twitter.gif" height="50" width="50" />
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
