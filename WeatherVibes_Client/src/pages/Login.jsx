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
            <div className="text-center mt-2">
              <button className="btn">Login</button>
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
