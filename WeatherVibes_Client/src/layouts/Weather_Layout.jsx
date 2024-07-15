import React, { useState } from "react";

function Weather_Layout() {
  return (
    <div className="row p-3">
      <div className="col-4">
        <form>
          <div className="form-group">
            <input
              type="text"
              name="city"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Place your city name"
            />
          </div>
          <button className="btn">🔍 Search</button>
        </form>
      </div>
      <div className="col-8">Recommended songs as per the weather</div>
    </div>
  );
}

export default Weather_Layout;
