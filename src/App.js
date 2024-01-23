import "./App.css";
import React from "react";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Weather Search Engine</h1>
          <Weather defaultCity="Lisbon" />
        </header>
        <footer>
          This project was coded by Catarina Santos and it's{" "}
          <a
            href="https://github.com/darkeubinniecodes/react-weather"
            target="blank"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
