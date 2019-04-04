import React, { Component } from 'react';
import Logo from './Logo';
import Header from './Header';
import MemoList from './MemoList';
import '../styles/App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo />
          <Header />

        </header>
        <main className="Main-content">
          <MemoList />
        </main>
      </div>
    );
  }
}

export default App;
