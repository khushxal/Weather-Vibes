import React, { useState } from "react";
import { IoSearchCircle } from "react-icons/io5";
function client_home() {
  const [isClicked, setIsClicked] = useState(false);
  function checkClick() {
    setIsClicked();
  }
  return (
    <div id="container-client-home" className="container">
      <div>
        <button onClick={checkClick} className="btn" id="search-btn">
          <IoSearchCircle></IoSearchCircle>
        </button>
      </div>
    </div>
  );
}

export default client_home;
