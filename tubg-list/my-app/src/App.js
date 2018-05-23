import React, { Component } from 'react';
import './App.css';
import PlayerList from './components/PlayerList/PlayerList'
import ListHead from './components/ListHead/ListHead'

class App extends Component {
  render() {
    return (
      <div className='ap-app-wrapper'>
        <ListHead />
        <PlayerList />
      </div>
    );
  }
}

export default App;
