import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Players from './components/Players';
import Navbar from './components/Navbar';

it('Players Component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Players />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('Navbar Component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navbar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('useDarkMode Component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<useDarkMode />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('useLocalStorage Component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<useLocalStorage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('App Component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
