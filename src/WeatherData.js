import React from "react";

export default function WeatherData(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          temperature:{" "}
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">ºC</span>
        </li>
        <li>description: {props.data.description}</li>
        <li>humidity: {props.data.humidity} %</li>
        <li>wind: {props.data.wind} km/h</li>
        <li>
          <img src={props.data.iconUrl} alt={props.data.description} />
        </li>
      </ul>
    </div>
  );
}
