import React, { useEffect } from "react";
import { useAuth } from "../store/auth";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { user, LoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      console.log(LoggedIn);
      if (!LoggedIn) {
        navigate("/logout");
      }
    },
    [user]
  );

  return <div></div>;
}

export default Profile;
