import React from "react";
import "../css/Footer.css";
function Footer() {
  return (
    <div>
      <div className="footer fw-bold rounded-5 mb-1">
        <footer className="d-flex flex-wrap justify-content-between align-items-center p-2">
          <div className="col-md-4 d-flex align-items-center">
            <span className="mb-3 mb-lg-0 text-white">
              WeatherVibes Inc © {new Date().getFullYear()} , by {"  "}
              <a href="https://khushalverma.netlify.app/">Khushal Verma</a>
            </span>
          </div>
          <ul className="nav col-md-4 m-1 justify-content-end list-unstyled d-flex">
            <li className="me-1">
              <a className="" href="">
                <img src="icon-insta.gif" height="35" width="35" />
              </a>
            </li>
            <li className="me-1">
              <a className="" href="#" />
              <img src="icon-twitter.gif" height="35" width="35" />
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
