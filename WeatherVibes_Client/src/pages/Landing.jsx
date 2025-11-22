import { Link } from "react-router-dom";
import "../css/Home.css";
function Landing() {
  return (
<<<<<<< HEAD
    <div className="container d-flex align-items-center justify-content-center mt-5">
      <div
        id="container-home"
        className="d-flex align-items-center justify-content-center p-5 rounded-5 h-500 mt-5"
      >
        <div className="">
          <h1 className="display-1 fw-bold">Jump into your world with vibes</h1>
          <div className="d-flex align-items-center justify-content-center">
            <Link to={"/login"}>
              <button class="btn btn-outline-dark btn-lg">Get Ready</button>
            </Link>
          </div>
        </div>
=======
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
>>>>>>> f6a9e64430d98839f77a2d984e2b0e3fadc84cb5
      </div>
    </div>
  );
}

export default Landing;
