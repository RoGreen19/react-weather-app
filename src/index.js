import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Weather from "./Weather";

import "./Weather.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <Weather />
    </div>
    <p className="code-link">
      {" "}
      <a
        href="https://github.com/RoGreen19/Weather-App-Final-Project"
        target="_blank"
        rel="noreferrer"
      >
        Open-source code
      </a>
      by Sofiia Telychko{" "}
    </p>
  </StrictMode>
);
