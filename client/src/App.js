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
        <h1>Statistics:</h1>
        <table>
      <tbody>

      <tr>
      <th>S/N</th>
        <th>Name</th>
        <th>Country</th>
        <th>Searches</th>
        
      </tr>
      </tbody>
    </table>
        <Players/>
      </div>
    );
  }
}

export default App;
