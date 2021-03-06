import React, { Component } from "react";
import './App.css';
import Auth from './Components/Login';
class App extends Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <Auth/>
      </header>
    </div>
  );
}
}
export default App;
