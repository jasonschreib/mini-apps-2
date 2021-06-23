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

    this.clickOnPinNum = this.clickOnPinNum.bind(this);

  }

  componentDidMount() {
    //set the current frame to 1 upon loading of the page
    this.setState({
      currentFrame: 1,
      currentBowl: 1
    }, () => {
      console.log(this.state);
    });
  }

  clickOnPinNum(event) {
    console.log('clicked on num', event.target.innerHTML);
    var selectedPins = event.target.innerHTML;
    //when user clicks on the number
    //if the current bowl is 2 and number is less than or equal to numPinsRemaining
    if (this.state.currentBowl === 2 && selectedPins <= this.state.numOfPinsRemaining) {
      //add the number of pins clicked to the array
      var updatedBowlingLog = this.state.bowlingLog;
      updatedBowlingLog.push(selectedPins);

      var newFrame = this.state.currentFrame;
      newFrame++;

      //increase the frame by one and change currentBowl to one
      //set number of pins remaining to 10
      //set number of pins selected to 0
      this.setState({
        bowlingLog: updatedBowlingLog,
        currentFrame: newFrame,
        currentBowl: 1,
        numOfPinsRemaining: 10
      }, () => {console.log('updated', this.state)});
      //otherwise if the current bowl is 1 and number selected is 10
    } else if (this.state.currentBowl === 1 && selectedPins === 10) {
      //add a 10 to the bowling array followed by a zero
      //increase the frame by one
      //change the currentBowl to two
      //set number of pins remaining to 10
      var updatedBowlingLog = this.state.bowlingLog;
      updatedBowlingLog.push(10);
      updatedBowlingLog.push(0);

      var newFrame = this.state.currentFrame;
      newFrame++;

      this.setState({
        bowlingLog: updatedBowlingLog,
        currentFrame: newFrame,
        currentBowl: 2,
        numOfPinsRemaining: 10
      }, () => {console.log('updated', this.state)});
      //otherwise if the current bowl is 1, then just add the number that was selected
    } else if (this.state.currentBowl === 1) {
      console.log('curr bowl is odd');
      var updatedBowlingLog = this.state.bowlingLog;
      updatedBowlingLog.push(selectedPins);

      var newNumPinsRemaining = 10 - selectedPins;

      this.setState({
        bowlingLog: updatedBowlingLog,
        numOfPinsRemaining: newNumPinsRemaining,
        currentBowl: 2
      }, () => {console.log('updated', this.state)});
    }
  }

  render() {
    return (
      <div>
        <h1>Bowling Score Calculator</h1>
        Hey there in App component
        {/* props for Game: currentFrame, currentBowl, numOfPinsSelected, numOfPinsRemaining */}
        <Game currentFrame={this.state.currentFrame} currentBowl={this.state.currentBowl} numOfPinsSelected={this.state.numOfPinsSelected} numOfPinsRemaining={this.state.numOfPinsRemaining} clickOnPinNum={this.clickOnPinNum}/>
        {/* props for Scores: currentFrame, currentBowl, bowlingLog */}
        <Scores currentFrame={this.state.currentFrame} currentBowl={this.state.currentBowl} bowlingLog={this.state.bowlingLog}/>
      </div>
    )
  }

}

export default App;