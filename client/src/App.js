import React, {useEffect, useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import Players from "./components/Players";
import Navbar from "./components/Navbar";

const useLocalStorage = (key, initialValue) =>{
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = value => {
    // Save state
    setStoredValue(value);
    // Save to local storage
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue];
}

export const useDarkMode = (initialValue) => {
  const [someValue, setSomeValue] = useLocalStorage('Dark Theme', initialValue);

  useEffect(() => {
    const bodyElement = document.querySelector('body');
    if(someValue){
      bodyElement.classList.add('dark-mode');
    }else{
      bodyElement.classList.remove('dark-mode');
    }
  },[someValue]);

  return [ someValue, setSomeValue]
}

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
