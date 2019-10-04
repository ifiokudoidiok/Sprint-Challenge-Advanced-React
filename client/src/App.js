import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Players from "./components/Players";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>TABLE:</h1>
        <Players/>
      </div>
    );
  }
}

export default App;
