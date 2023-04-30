import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="card text-bg-dark">
        <img
          src="scr/20210118-barnimages-2.jpg"
          classNameName="card-img"
          alt="Wearher"
        />
        <div className="card-img-overlay">
          <h2 id="city-name">Kyiv</h2>
          <h4 id="current-date">05/12</h4>
          <h5 id="current-time">12:01</h5>
          <form id="city-input">
            <input
              id="search-new-city"
              type="search"
              placeholder="Search city"
              autocomplete="off"
            />
            <button className="search-button">🔍</button>
          </form>
          <img className="weather-img-current" src="scr/200-232.png" />
          <h1 id="day-temperasture">-12°</h1>
          <h6 id="current-forecast">Cloudy</h6>
          <h6 id="humidity">Humidity: 10%</h6>
          <h6 id="wind">Wind: 13 mph</h6>
          <div className="container text-center" id="forecast">
            <div className="row">
              <div className="col">
                <p className="weekdate-one-name">Mon</p>
                <br />
                <img
                  src="http://openweathermap.org/img/wn/10d@2x.png"
                  className="week-weather-icon"
                />
                <br />
                <p className="weekdate-one-temperature">
                  <span className="max-temperature">8°</span>
                  <span className="min-temperature">/-12°</span>
                </p>
              </div>
              <div className="col">
                <p className="weekdate-two-name">Tues</p>
                <br />
                <img
                  src="http://openweathermap.org/img/wn/13d@2x.png"
                  className="week-weather-icon"
                />
                <br />
                <p className="weekdate-two-temperature">
                  <span className="max-temperature">8°</span>
                  <span className="min-temperature">/-12°</span>
                </p>
              </div>
              <div className="col">
                <p className="weekdate-three-name">Wed</p>
                <br />
                <img
                  src="http://openweathermap.org/img/wn/10d@2x.png"
                  className="week-weather-icon"
                />
                <br />
                <p className="weekdate-three-temperature">
                  <span className="max-temperature">8°</span>
                  <span className="min-temperature">/-12°</span>
                </p>
              </div>
              <div className="col">
                <p className="weekdate-four-name">Thurs</p>
                <br />
                <img
                  src="http://openweathermap.org/img/wn/09d@2x.png"
                  className="week-weather-icon"
                />
                <br />
                <p className="weekdate-four-temperature">
                  <span className="max-temperature">8°</span>
                  <span className="min-temperature">/-12°</span>
                </p>
              </div>
              <div className="col">
                <p className="weekdate-five-name">Fri</p>
                <br />
                <img
                  src="http://openweathermap.org/img/wn/50d@2x.png"
                  className="week-weather-icon"
                />
                <br />
                <p className="weekdate-five-temperature">
                  <span className="max-temperature">8°</span>
                  <span className="min-temperature">/-12°</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="code-link">
        {" "}
        <a
          href="https://github.com/RoGreen19/Weather-App-Final-Project"
          target="_blank"
          style="color: #F9A90F"
        >
          Open-source code
        </a>
        by Sofiia Telychko{" "}
      </p>
    </div>
  );
}

export default App;
