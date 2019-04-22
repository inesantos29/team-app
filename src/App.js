import React, { Component } from 'react';
import './App.css';
import { UserCardList } from "./components/UserCardList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="App-header">
            <h1>Team App</h1>
            <UserCardList />
        </section>
      </div>
    );
  }
}

export default App;
