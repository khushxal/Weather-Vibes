import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../css/Register.css";
import axios from "axios";
import { useAuth } from "../store/auth";

function Register() {
  const { storeToken } = useAuth();

  const navigate = useNavigate();

  const URL = import.meta.env.REACT_APP_SERVER_API + "/api/auth/register";

  const userData = {
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
    dob: "",
  };

  const [user, setUser] = useState(userData);

  const [visibility, setVisibility] = useState({
    password: false,
    confirmPassword: false,
  });

  function handleChange(event) {
    try {
      const { name, value } = event.target;
      setUser({ ...user, [name]: value });
    } catch (error) {
      console.log(error);
    }
  }

  function handleVisibility(field) {
    try {
      setVisibility({ ...visibility, [field]: !visibility[field] });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      if (user.password == user.confirmPassword) {
        const response = await axios.post(URL, user);
        if (response.status === 201) {
          toast.success(response.data.msg);
          storeToken(response.data.token);
          navigate("/login");
        } else {
          toast.error(response.data.msg);
        }
      } else {
        toast.error("Provided password are not matching");
      }
    } catch (error) {
      console.log(error);
    }
    setUser(userData);
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
              <label htmlFor="exampleFormControlInput2">Full Name</label>
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
              <label htmlFor="exampleFormControlInput3">Password</label>
              <div className="input-wrapper">
                <img
                  src={
                    visibility.password
                      ? "https://img.icons8.com/?size=100&id=121540&format=png&color=000000"
                      : "https://img.icons8.com/?size=100&id=85028&format=png&color=000000"
                  }
                  alt="eye-icon"
                  height={20}
                  width={20}
                  className="eye-icon"
                  onClick={() => {
                    handleVisibility("password");
                  }}
                />
                <input
                  type={visibility.password ? "text" : "password"}
                  name="password"
                  className="form-control"
                  id="exampleFormControlInput3"
                  value={user.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput4">Confirm Password</label>
              <div className="input-wrapper">
                <img
                  src={
                    visibility.confirmPassword
                      ? "https://img.icons8.com/?size=100&id=121540&format=png&color=000000"
                      : "https://img.icons8.com/?size=100&id=85028&format=png&color=000000"
                  }
                  alt="eye-icon"
                  height={20}
                  width={20}
                  className="eye-icon"
                  onClick={() => {
                    handleVisibility("confirmPassword");
                  }}
                />
                <input
                  type={visibility.confirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  className="form-control"
                  id="exampleFormControlInput4"
                  value={user.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput5">DoB</label>
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
                Not having account ? <Link to="/login">Sign in</Link>
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
