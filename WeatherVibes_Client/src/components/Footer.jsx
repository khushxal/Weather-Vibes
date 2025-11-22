import React from "react";
import "../css/Footer.css";
function Footer() {
  return (
    <div>
      <div className="fw-bold mb-1 position-fixed bottom-0 end-0 start-0">
        <footer className="d-flex justify-content-center align-items-center ">
          <div className="mb-3 mb-lg-0 text-white fw-light">
            WeatherVibes Inc © {new Date().getFullYear()} , by {"  "}
            <a href="https://khushxal.github.io/Khushal/">Khushal Verma</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
