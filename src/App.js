import React, { Component } from 'react';
import './App.css';
import { UserCardList } from "./components/UserCardList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1>Team App</h1>
            <UserCardList />
        </header>
      </div>
    );
  }
}

export default App;
