import React from 'react';
import ReactDOM from 'react-dom';

import Game from './Game.jsx';
import Scores from './Scores.jsx';
import GameplayOver from './GameplayOver.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameplayOn: false,
      currentFrame: 0,
      currentBowl: 0,
      numOfPinsRemaining: 10,
      totalScore: 0,
      bowlingLog: [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
      ]
    };

    this.clickOnPinNum = this.clickOnPinNum.bind(this);
    this.calculateScore = this.calculateScore.bind(this);

  }

  componentDidMount() {
    //set the current frame to 1 upon loading of the page and turn gameplay on
    this.setState({
      currentFrame: 1,
      currentBowl: 1,
      gameplayOn: true
    }, () => {
      console.log(this.state);
    });
  }

  clickOnPinNum(event) {
    var selectedPins = parseInt(event.target.innerHTML);
    console.log('clicked on num', selectedPins);

    // Take care of case when ending game - so if it is the tenth frame
    if (this.state.currentFrame === 10) {
      console.log('frame10');
      //if it is bowl one
      if (this.state.currentBowl === 1) {
        //if ten selected
        if (selectedPins === 10) {
          //update the bowling log
          //increment currentBowl by one
          //set remainingPins to 10
          var updatedBowlingLog = this.state.bowlingLog;
          updatedBowlingLog[this.state.currentFrame - 1].push(selectedPins);
          this.setState({
            bowlingLog: updatedBowlingLog,
            currentBowl: 2,
            numOfPinsRemaining: 10
          }, () => { console.log('updated', this.state) });
        //if not ten
        } else if (selectedPins != 10) {
          //update the bowling log
          //increment currentBowl by one
          //set remainingPins
          var updatedBowlingLog = this.state.bowlingLog;
          updatedBowlingLog[this.state.currentFrame - 1].push(selectedPins);
          var newNumPinsRemaining = 10 - selectedPins;
          this.setState({
            bowlingLog: updatedBowlingLog,
            currentBowl: 2,
            numOfPinsRemaining: newNumPinsRemaining
          }, () => { console.log('updated', this.state) });
        }
        //if it is bowl two
      } else if (this.state.currentBowl === 2) {
        //if ten selected and bowl one was ten (strikes)
        if (selectedPins === 10 && this.state.bowlingLog[9][0] === 10) {
          //update the bowling log
          //increment currentBowl by one
          //set remainingPins to 10
          var updatedBowlingLog = this.state.bowlingLog;
          updatedBowlingLog[this.state.currentFrame - 1].push(selectedPins);
          this.setState({
            bowlingLog: updatedBowlingLog,
            currentBowl: 3,
            numOfPinsRemaining: 10
          }, () => { console.log('updated', this.state) });
          //if spare - current selection + bowl 1 = 10
        } else if (selectedPins + this.state.bowlingLog[9][0] === 10) {
          //update the bowling log
          //increment currentBowl by one
          //set remainingPins to 10
          var updatedBowlingLog = this.state.bowlingLog;
          updatedBowlingLog[this.state.currentFrame - 1].push(selectedPins);
          this.setState({
            bowlingLog: updatedBowlingLog,
            currentBowl: 3,
            numOfPinsRemaining: 10
          }, () => { console.log('updated', this.state) });
        //else
        } else {
          //update the bowling log
          //end gameplay
          var updatedBowlingLog = this.state.bowlingLog;
          updatedBowlingLog[this.state.currentFrame - 1].push(selectedPins);
          this.setState({
            bowlingLog: updatedBowlingLog,
            gameplayOn: false
          }, () => { console.log('updated', this.state) });
        }
        //if it is bowl three
      } else if (this.state.currentBowl === 3) {
        //update the bowling log
        //set gameplay to false
        var updatedBowlingLog = this.state.bowlingLog;
          updatedBowlingLog[this.state.currentFrame - 1].push(selectedPins);
          this.setState({
            bowlingLog: updatedBowlingLog,
            gameplayOn: false
          }, () => { console.log('updated', this.state) });
      }
    } else if (this.state.currentBowl === 2 && selectedPins <= this.state.numOfPinsRemaining) {
      //add the number of pins clicked to the array
      var updatedBowlingLog = this.state.bowlingLog;
      updatedBowlingLog[this.state.currentFrame - 1].push(selectedPins);

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
      }, () => { console.log('updated', this.state) });
      //otherwise if the current bowl is 1 and number selected is 10
    } else if (this.state.currentBowl === 1 && selectedPins === 10) {
      console.log('here');
      //add a 10 to the bowling array in its respective position
      //increase the frame by one
      //set number of pins remaining to 10
      var updatedBowlingLog = this.state.bowlingLog;
      updatedBowlingLog[this.state.currentFrame - 1].push(10);
      // updatedBowlingLog.push('skip');

      var newFrame = this.state.currentFrame;
      newFrame++;
      this.setState({
        bowlingLog: updatedBowlingLog,
        currentFrame: newFrame,
        numOfPinsRemaining: 10
      }, () => { console.log('updated', this.state) });
      //otherwise if the current bowl is 1, then just add the number that was selected
    } else if (this.state.currentBowl === 1) {
      console.log('curr bowl is odd');
      var updatedBowlingLog = this.state.bowlingLog;
      updatedBowlingLog[this.state.currentFrame - 1].push(selectedPins);

      var newNumPinsRemaining = 10 - selectedPins;

      this.setState({
        bowlingLog: updatedBowlingLog,
        numOfPinsRemaining: newNumPinsRemaining,
        currentBowl: 2
      }, () => { console.log('updated', this.state) });
    }

    //invoke calculate score function
    this.calculateScore();
  }

  //function to calculate the score throughout the game
  calculateScore () {
    console.log('in the calculate score function', this.state.bowlingLog);
    //using the bowling log, calculate the score
    //set an initial variable for the score

    //iterate over the bowlingLog array
      //create temp frameScore var and set to 0
      //calculate the score for each inner array - if the score for the current array is a strike
        //set framescore equal to 10 plus the next 2 bowls
      //otherwise if the score for the current array is a spare
        //set the framescore equal to 10 plus the next bowl
      //otherwise
        //set the framescore equal to the first and second bowls of the frame
      //add the temp frame score to the total score
    //update the state with this score
  }

  render() {
    return (
      <div>
        <h1>Bowling Score Calculator</h1>
        Hey there in App component
        {/* props for Game: currentFrame, currentBowl, numOfPinsRemaining */}
        {this.state.gameplayOn ? <Game currentFrame={this.state.currentFrame} currentBowl={this.state.currentBowl} numOfPinsRemaining={this.state.numOfPinsRemaining} clickOnPinNum={this.clickOnPinNum} /> : <GameplayOver />}

        {/* props for Scores: currentFrame, currentBowl, bowlingLog */}
        <Scores currentFrame={this.state.currentFrame} currentBowl={this.state.currentBowl} bowlingLog={this.state.bowlingLog} totalScore={this.state.totalScore}/>
      </div>
    )
  }

}

export default App;