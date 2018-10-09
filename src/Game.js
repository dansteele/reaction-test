import React, { Component } from 'react';

class Game extends Component {
  static get defaultState() {
    return {
      started: false,
      finished: false,
      elapsedTime: 0
    }
  }

  constructor(props) {
    super(props);
    this.state = Game.defaultState;
  }

  handleClick() {
    if (this.state.started) {
      this.setState({
        started: false,
        finished: true,
        elapsedTime: (new Date - this.startTime) / 1000
      });
    } else if (this.state.finished) {
      this.setState(Game.defaultState); // Reset
    } else {
      this.startTime = new Date;
      this.setState({
        started: true,
      });
    }
  }

  get cssState() {
    if (this.state.started) {
      return 'active'
    } else if (this.state.finished) {
      return 'done'
    } else {
      return 'ready'
    }
  }

  render() {
    let message;
    if (this.state.started) {
      message = 'Click!';
    } else if (this.state.finished) {
      message = 'Reset';
    } else {
      message = 'Ready...';
    };

    return (
      <div className={`game ${this.cssState}`}
        onClick={() => this.handleClick()}>
        <h1>{message}</h1>
        {this.state.elapsedTime > 0 &&
          <div>You took {this.state.elapsedTime}s</div>
        }
      </div>
    );
  }
}

export default Game;
