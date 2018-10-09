import React, { Component } from 'react';
import Game from './Game';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game
          active={ false }
        />
      </div>
    );
  }
}

export default App;
