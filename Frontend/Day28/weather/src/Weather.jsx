import React, { useState, useEffect } from "react";
import "./App.css";

const Weather = () => {
  const [city, setCity] = useState("Delhi");
  const [info, setInfo] = useState({});

  useEffect(() => {
    handleSubmit();
  }, []);

  const transformData = (data) => {
    return {
      icon: data.current.condition.icon,
      summary: data.current.condition.text,
      temp: data.current.temp_c,
      wind_speed: data.current.wind_kph,
      precipitation: data.current.precip_mm,
      humidity: data.current.humidity,
      city_name: data.location.name,
    };
  };

  const url = `http://api.weatherapi.com/v1/current.json?key=1a1202bad9e44bf885e185638213007&`;

  const handleSubmit = async () => {
    const response = await fetch(`${url}q=${city}`);
    const data = await response.json();

    setInfo(transformData(data));
    // console.log(data);
  };

  return (
    <div className="container">
      <div style={{ marginBottom: "2px" }}>
        <input
          type="text"
          value={city}
          placeholder="Enter city"
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSubmit}>Check now</button>
      </div>

      <div className="result">
        <img src={info.icon} alt="" />
        <h1>{info.temp}°</h1>
        <h3>{info.summary}</h3>
        <h1>{info.city_name}</h1>
      </div>
      <div className="whp">
        <div className="simple">
          <h5>Wind Now</h5>
          <h2>{info.wind_speed}km</h2>
        </div>
        <div className="simple">
          <h5>Humidity</h5>
          <h2>{info.humidity}%</h2>
        </div>
        <div className="simple">
          <h5>Percipitation</h5>
          <h2>{info.precipitation}%</h2>
        </div>
      </div>
    </div>
  );
};

export default Weather;