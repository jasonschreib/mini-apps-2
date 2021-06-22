import React from 'react';
import ReactDOM from 'react-dom';

{/* props for Game: currentFrame, currentBowl, numOfPinsSelected, numOfPinsRemaining clickOnPinNum function*/}
function Game (props) {
  return (
    <div>
      <h2>Please select the number of pins to hit for frame {props.currentFrame} bowl {props.currentBowl}. You have {props.numOfPinsRemaining} pins remaining for this bowl</h2>

      <div>
        <div>
          <button onClick={props.clickOnPinNum}>0</button>
          <button onClick={props.clickOnPinNum}>1</button>
          <button onClick={props.clickOnPinNum}>2</button>
          <button onClick={props.clickOnPinNum}>3</button>
        </div>
        <div>
          <button onClick={props.clickOnPinNum}>4</button>
          <button onClick={props.clickOnPinNum}>5</button>
          <button onClick={props.clickOnPinNum}>6</button>
        </div>
        <div>
          <button onClick={props.clickOnPinNum}>7</button>
          <button onClick={props.clickOnPinNum}>8</button>
          <button onClick={props.clickOnPinNum}>9</button>
        </div>
        <div>
          <button onClick={props.clickOnPinNum}>10</button>
        </div>
      </div>



    </div>
  );
}

export default Game;