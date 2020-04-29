import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./Title";
import Pokemon from "./pokemon";

function App() {
  return (
    <div className="App">
      <main>
        <Title content="some simple title" />
      </main>
      <Pokemon/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save the queen.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello world!
        </a>
      </header>
    </div>
  );
}

export default App;
