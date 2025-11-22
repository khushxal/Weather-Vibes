import React from "react";
import "../css/Footer.css";
function Footer() {
  return (
    <div>
<<<<<<< HEAD
      <div className="fw-bold mb-1 position-fixed bottom-0 end-0 start-0">
        <footer className="d-flex justify-content-center align-items-center ">
          <div className="mb-3 mb-lg-0 text-white fw-light">
            WeatherVibes Inc © {new Date().getFullYear()} , by {"  "}
            <a href="https://khushxal.github.io/Khushal/">Khushal Verma</a>
=======
      <div className="footer fw-bold rounded-5 mb-1">
        <footer className="d-flex flex-wrap justify-content-between align-items-center p-2">
          <div className="col-md-4 d-flex align-items-center">
            <span className="mb-3 mb-lg-0 text-white">
              WeatherVibes Inc © {new Date().getFullYear()} , by {"  "}
              <a href="https://khushalverma.netlify.app/">Khushal Verma</a>
            </span>
>>>>>>> f6a9e64430d98839f77a2d984e2b0e3fadc84cb5
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
