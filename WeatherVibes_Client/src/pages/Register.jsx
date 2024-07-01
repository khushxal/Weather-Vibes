import React from "react";
import { Link } from "react-router-dom";
import "../css/Register.css";
function Register() {
  return (
    <div id="container-register" className="container p-5 my-2">
      <div className="row">
        <div className="col-xl-6 col-sm-12">
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
              <label for="exampleFormControlInput1">Full Name</label>
              <input
                type="text"
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
            <div class="form-group">
              <label for="exampleFormControlInput1">Confirm Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">DoB</label>
              <input
                type="date"
                class="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div className="text-center mt-2">
              <button className="btn">Get Started</button>
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

export default Register;
