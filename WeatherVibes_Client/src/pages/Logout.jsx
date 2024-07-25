import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

function Logout() {
  const navigate = useNavigate();

  const { deleteToken } = useAuth();

  useEffect(function () {
    deleteToken();
    toast.success("Logged Out");
    navigate("/login");
  }, []);

  return <div></div>;
}

export default Logout;
