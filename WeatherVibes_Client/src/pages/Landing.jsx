import { Link } from "react-router-dom";
import "../css/Home.css";
function Landing() {
  return (
    <div className="h100vh container d-flex align-items-center justify-content-center">
      <div className="d-flex align-items-center justify-content-center">
        <div className="text-center">
          <div className="display-1 fw-bold">
            Jump into your world with vibes
          </div>
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
