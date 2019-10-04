import React, { useEffect, useState } from "react";
import cup from "./cup.png";
import "./App.css";
import Players from "./components/Players";
import Navbar from "./components/Navbar";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <img src={cup} />
        <h1>Statistics:</h1>
        <Players />
      </div>
    );
  }
}

export default App;
