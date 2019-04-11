import React, { Component } from 'react';
import './App.css';
import { UserCardList } from "./components/UserCardList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <UserCardList />

        </header>
      </div>
    );
  }
}

export default App;
