import { Link, useNavigate } from "react-router-dom";
import "../css/Login.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../store/auth";
import { useState } from "react";
function Login() {
  const navigate = useNavigate();

  const { storeToken } = useAuth();

  const URL = import.meta.env.REACT_APP_SERVER_API + "/api/auth/login";

  const userData = {
    email: "",
    password: "",
  };

  const [user, setUser] = useState(userData);

  const [visibility, setVisibility] = useState({
    password: false,
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
      const response = await axios.post(URL, user);
      toast.success(response.data.msg);
      if (response.status === 200) {
        storeToken(await response.data.token);
        navigate("/dashboard/");
      }
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  }

  return (
    <div className="h100vh d-flex align-items-center justify-content-center container">
      <div className="shadow d-flex justify-content-center align-items-center">
        <div>
          <img
            src="./login-card-side-img.png"
            height={500}
            width={500}
            alt=""
            srcset=""
          />
        </div>
        <div className="mx-2">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <div className="mb-2 fs-2">Weather-Vibes, Welcomes you</div>
            <div className="mb-3">
              Hope you love the way you surf your vibes 🥰🎧
            </div>
          </div>
          <div className="">
            <form className="m-1 p-1">
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
                <label htmlFor="exampleFormControlInput2">Password</label>
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
                    id="exampleFormControlInput2"
                    value={user.password}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="text-center ">
                <button className="btn">Login</button>
              </div>
            </form>
          </div>
          <div className="d-flex align-items-center justify-content-center gap-2">
            <div style={{ fontSize: "14px" }}>
              Not having account ? <Link to="/register">Sign Up</Link>
            </div>
            |<div style={{ fontSize: "14px" }}>Terms and Conditions</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
