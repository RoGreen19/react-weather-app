import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="card text-bg-dark">
        <img
          src="scr/20210118-barnimages-2.jpg"
          class="card-img"
          alt="Wearher"
        />
        <div class="card-img-overlay">
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
            <button class="search-button">🔍</button>
          </form>
          <img class="weather-img-current" src="scr/200-232.png" />
          <h1 id="day-temperasture">-12°</h1>
          <h6 id="current-forecast">Cloudy</h6>
          <h6 id="humidity">Humidity: 10%</h6>
          <h6 id="wind">Wind: 13 mph</h6>
          <div class="container text-center" id="forecast">
            <div class="row">
              <div class="col">
                <p class="weekdate-one-name">Mon</p>
                <br />
                <img
                  src="http://openweathermap.org/img/wn/10d@2x.png"
                  class="week-weather-icon"
                />
                <br />
                <p class="weekdate-one-temperature">
                  <span class="max-temperature">8°</span>
                  <span class="min-temperature">/-12°</span>
                </p>
              </div>
              <div class="col">
                <p class="weekdate-two-name">Tues</p>
                <br />
                <img
                  src="http://openweathermap.org/img/wn/13d@2x.png"
                  class="week-weather-icon"
                />
                <br />
                <p class="weekdate-two-temperature">
                  <span class="max-temperature">8°</span>
                  <span class="min-temperature">/-12°</span>
                </p>
              </div>
              <div class="col">
                <p class="weekdate-three-name">Wed</p>
                <br />
                <img
                  src="http://openweathermap.org/img/wn/10d@2x.png"
                  class="week-weather-icon"
                />
                <br />
                <p class="weekdate-three-temperature">
                  <span class="max-temperature">8°</span>
                  <span class="min-temperature">/-12°</span>
                </p>
              </div>
              <div class="col">
                <p class="weekdate-four-name">Thurs</p>
                <br />
                <img
                  src="http://openweathermap.org/img/wn/09d@2x.png"
                  class="week-weather-icon"
                />
                <br />
                <p class="weekdate-four-temperature">
                  <span class="max-temperature">8°</span>
                  <span class="min-temperature">/-12°</span>
                </p>
              </div>
              <div class="col">
                <p class="weekdate-five-name">Fri</p>
                <br />
                <img
                  src="http://openweathermap.org/img/wn/50d@2x.png"
                  class="week-weather-icon"
                />
                <br />
                <p class="weekdate-five-temperature">
                  <span class="max-temperature">8°</span>
                  <span class="min-temperature">/-12°</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="code-link">
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
