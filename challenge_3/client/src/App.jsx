import React from 'react';
import ReactDOM from 'react-dom';

import Game from './Game.jsx';
import Scores from './Scores.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFrame: 0,
      currentBowl: 0,
      numOfPinsSelected: 0,
      numOfPinsRemaining: 10,
      bowlingLog: []
    };
  }

  componentDidMount() {
    //set the current frame to 1 upon loading of the page
    this.setState({
      currentFrame: 1
    }, () => {
      console.log(this.state);
    });
  }

  render() {
    return (
      <div>
        <h1>Bowling</h1>
        Hey there in App component
        {/* props for Game: currentFrame, currentBowl, numOfPinsSelected, numOfPinsRemaining */}
        <Game currentFrame={this.state.currentFrame} currentBowl={this.state.currentBowl} numOfPinsSelected={this.state.numOfPinsSelected} numOfPinsRemaining={this.state.numOfPinsRemaining}/>
        {/* props for Scores: currentFrame, currentBowl, bowlingLog */}
        <Scores currentFrame={this.state.currentFrame} currentBowl={this.state.currentBowl} bowlingLog={this.state.bowlingLog}/>
      </div>
    )
  }

}

export default App;