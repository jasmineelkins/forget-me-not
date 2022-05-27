import React, { useState } from "react";

function Weather(props) {
  function handleGetWeather() {
    // GET call to weather API
    fetch(`/weather`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error.message));
  }

  return (
    <div className="weatherContainer">
      <button onClick={handleGetWeather}>Get Weather</button>
    </div>
  );
}

export default Weather;
