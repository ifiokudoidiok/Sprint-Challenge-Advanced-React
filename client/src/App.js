import React, {useEffect, useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import Players from "./components/Players";
import Navbar from "./components/Navbar";





class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <h1>TABLE:</h1>
        <Players/>
      </div>
    );
  }
}

export default App;
