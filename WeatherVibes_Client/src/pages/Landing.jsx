import { Link } from "react-router-dom";
import "../css/Home.css";
function Landing() {
  return (
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
      </div>
    </div>
  );
}

export default Landing;
