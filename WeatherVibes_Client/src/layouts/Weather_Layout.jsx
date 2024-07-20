import React, { useState } from "react";

function Weather_Layout() {
  return (
    <div className="row">
      <div className="col-12 col-lg-4">
        <form className="bg-light">
          <h3>Check current weather at yor location</h3>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1"></label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
        </form>
      </div>
      <div className="col-lg-8 fs-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        assumenda officia suscipit rem, sint inventore atque reiciendis id
        excepturi laboriosam sequi minus? Impedit aspernatur aperiam sapiente
        nihil officiis ratione veritatis?
      </div>
    </div>
  );
}

export default Weather_Layout;
