import { useLoc } from "../store/location";
function Weather_Layout() {
  const { city, weather, temprature } = useLoc();
  const tempratureInCel = Math.round(temprature - 273.15);
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
          <hr />
        </form>
        <div>
          <h3>Curent Weather</h3>
          <ul className="list-unstyled">
            <li>City : {city}</li>
            <li>Weather : {weather}</li>
            <li>Temprature : {tempratureInCel}°C</li>
          </ul>
        </div>
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
