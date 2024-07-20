import { useEffect, useState } from "react";
import axios from "axios";
function Weather_Layout() {
  const [position, setPosition] = useState({ latitude: null, longitude: null });

  const [city, setCity] = useState("");

  const API_key = "3dd8ea3a29929af833acb4fb9a8239cf";

  function getGeolocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      console.log("Geolocation is not available in your browser.");
    }
  }

  async function getCity() {
    try {
      const data = await axios.get(
        `http://api.openweathermap.org/geo/1.0/reverse?lat=${position.latitude}&lon=${position.longitude}&limit=2&appid=${API_key}`
      );
      setCity(await data.data[0].name);
      console.log("This is data from getCity", await data.data[0].name);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getGeolocation();
    getCity();
  }, []);

  return (
    <div className="row">
      <div className="col-12 col-lg-4">
        <form className="">
          <h3>Predict music</h3>
          <div className="form-group">
            <input
              type="text"
              name="song"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <button className="btn">🔍Search</button>
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
