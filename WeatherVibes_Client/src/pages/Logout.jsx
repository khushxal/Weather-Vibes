import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

function Logout() {
  const navigate = useNavigate();

  const { deleteToken } = useAuth();

  useEffect(function () {
    deleteToken();
    navigate("/login");
  }, []);

  return <div></div>;
}

export default Logout;
