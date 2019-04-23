import React, { Component } from 'react';
import './App.css';
import { UserCardList } from "./components/UserCardList";

class App extends Component {
  render() {
    return (
      <div className="team-app">
        <h1>Team App</h1>
        <UserCardList />
      </div>
    );
  }
}

export default App;
