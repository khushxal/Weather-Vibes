import { useContext, createContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
// created the auth context all authentication and authorization will be handled here.
export const LocationContext = createContext();

// Provider is used to wrap the part of code that will be using the context api variables.
export function LocationProvider({ children }) {
  const API_key = "a5b0207286a78aae72fb9a7b165d0fe9";

  const [city, setCity] = useState("--");

  const [weather, setWeather] = useState("--");

  const [temprature, setTemprature] = useState("--");

  const [position, setPosition] = useState({ latitude: null, longitude: null });

  const [isPositionSet, setIsPositionSet] = useState(false);

  function getGeolocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
      localStorage.setItem("lat", position.latitude);
      localStorage.setItem("long", position.longitude);
      setIsPositionSet(true);
    } else {
      setIsPositionSet(false);
      console.log("Geolocation is not available in your browser.");
    }
  }

  async function getCity() {
    try {
      console.log("API Called");
      const data = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${localStorage.getItem(
          "lat"
        )}&lon=${localStorage.getItem("long")}&appid=${API_key}`
      );
      localStorage.setItem("city", await data.data.name);
      setWeather(await data.data.weather[0].main);
      setCity(await data.data.name);
      setTemprature(await data.data.main.temp);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getGeolocation();
    if (isPositionSet) {
      getCity();
    }
  }, [position.longitude && position.latitude]);

  return (
    <LocationContext.Provider value={{ position, city, weather, temprature }}>
      {children}
    </LocationContext.Provider>
  );
}

// Use is called whenever any variable is required.
export function useLoc() {
  return useContext(LocationContext);
}
