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

  function handleVisibility(field) {
    try {
      setVisibility({ ...visibility, [field]: !visibility[field] });
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(event) {
    try {
      const { name, value } = event.target;
      setUser({ ...user, [name]: value });
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
    <div className="container h100vh d-flex justify-content-center align-items-center">
      <div className="bg-white shadow rounded-4 p-4 w-50">
        <h2 className="text-center mb-1 fw-semibold">Create your account</h2>
        <p className="text-center text-muted mb-4 fs-6">
          Join us and get started in a few seconds.
        </p>

        <form onSubmit={handleSubmit} className="fs-6">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleFormControlInput1"
              value={user.email}
              onChange={handleChange}
              placeholder="name@example.com"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput2" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="exampleFormControlInput2"
              value={user.name}
              onChange={handleChange}
              placeholder="John Doe"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput3" className="form-label">
              Password
            </label>
            <div className="input-wrapper position-relative">
              <input
                type={visibility.password ? "text" : "password"}
                name="password"
                className="form-control pe-5"
                id="exampleFormControlInput3"
                value={user.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
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
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput4" className="form-label">
              Confirm Password
            </label>
            <div className="input-wrapper position-relative">
              <input
                type={visibility.confirmPassword ? "text" : "password"}
                name="confirmPassword"
                className="form-control pe-5"
                id="exampleFormControlInput4"
                value={user.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter your password"
              />
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
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput5" className="form-label">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              className="form-control"
              id="exampleFormControlInput5"
              value={user.dob}
              onChange={handleChange}
            />
          </div>
          <div className="text-center">
            <button className="btn w-100 py-2 fw-semibold mb-2">
              Get Started
            </button>
            <p className="mb-1">
              Already have an account? <Link to="/login">Sign in</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
