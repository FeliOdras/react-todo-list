import React, { Component } from 'react';
import Logo from './Logo';
import Header from './Header';
import Memolist from './Memolist';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo />
          <Header />
          <Memolist />
        </header>
      </div>
    );
  }
}

export default App;
