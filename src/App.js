import React, { Component } from 'react';
import Logo from './klogo.js';
import './App.css';
import List from './components/List'
import UserForm from "./components/UserForm"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo />
          <h1 className="App-title">Welcome to Kyruus</h1>
        </header>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <List />
      </div>
    );
  }
}

export default App;
