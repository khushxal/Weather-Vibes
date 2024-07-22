import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "../css/Register.css";

function Register() {
  const userData = {
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
    dob: "",
  };

  const [user, setUser] = useState(userData);

  function handleChange(event) {
    try {
      const { name, value } = event.target;
      setUser({ ...user, [name]: value });
    } catch (error) {
      console.log(error);
    }
  }

  function handleSubmit(event) {
    try {
      event.preventDefault();
      console.log(user);
      if (user.password === user.confirmPassword) {
        setUser(userData);
      } else {
        toast.error("Please type matching password");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div id="container-register" className="container p-5 my-2">
      <div className="row">
        <div className="col-xl-6 col-sm-12">
          <form onSubmit={handleSubmit} className="m-1 p-1 fs-5">
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="exampleFormControlInput1"
                value={user.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Full Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="exampleFormControlInput2"
                value={user.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="exampleFormControlInput3"
                value={user.password}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                className="form-control"
                id="exampleFormControlInput4"
                value={user.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">DoB</label>
              <input
                type="date"
                name="dob"
                className="form-control"
                id="exampleFormControlInput5"
                value={user.dob}
                onChange={handleChange}
              />
            </div>
            <div className="text-center mt-2">
              <button className="btn text-white">Get Started</button>
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
