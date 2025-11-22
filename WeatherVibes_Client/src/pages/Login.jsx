import { Link } from "react-router-dom";
import "../css/Login.css";
function Login() {
  return (
    <div id="container-login" className="container">
      <div className="row">
        <div className="text-center">
          <div className="fs-1">Weather-Vibes, Welcomes you</div>
          <div className="fs-5">
            Hope you love the way you surf your vibes 🥰🎧
          </div>
        </div>
        <div className="text-center">
          <form className="m-1 p-1 fs-5">
            <div class="form-group">
              <label for="exampleFormControlInput1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div className="text-center mt-2">
              <button className="btn">Login</button>
              <hr />
              <p>
                Not having account ? <Link to="/register">Sign Up</Link>
              </p>
              <p className="fs">Terms and Conditions</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
