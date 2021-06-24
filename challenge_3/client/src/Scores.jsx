import React from 'react';
import ReactDOM from 'react-dom';

// import totalScoreCalculator from `${__dirname}/scoringCalculator.js`;

function Scores(props) {

  return (
    <div>
      <h2>Scoring:</h2>
      <div>
        Current Frame: {props.currentFrame} / 10
        </div>
      <div>
        {/* Iterate over the bowlingLog array and display a table that includes the frame and the 2 shots for each frame */}
        <tr>
          <th>Frame 1</th>
          <td>{props.bowlingLog[0][0]}</td>
          /
          <td>{props.bowlingLog[0][1]}</td>
        </tr>
        <tr>
          <th>Frame 2</th>
          <td>{props.bowlingLog[1][0]}</td>
          /
          <td>{props.bowlingLog[1][1]}</td>
        </tr>
        <tr>
          <th>Frame 3</th>
          <td>{props.bowlingLog[2][0]}</td>
          /
          <td>{props.bowlingLog[2][1]}</td>
        </tr>
        <tr>
          <th>Frame 4</th>
          <td>{props.bowlingLog[3][0]}</td>
          /
          <td>{props.bowlingLog[3][1]}</td>
        </tr>
        <tr>
          <th>Frame 5</th>
          <td>{props.bowlingLog[4][0]}</td>
          /
          <td>{props.bowlingLog[4][1]}</td>
        </tr>
        <tr>
          <th>Frame 6</th>
          <td>{props.bowlingLog[5][0]}</td>
          /
          <td>{props.bowlingLog[5][1]}</td>
        </tr>
        <tr>
          <th>Frame 7</th>
          <td>{props.bowlingLog[6][0]}</td>
          /
          <td>{props.bowlingLog[6][1]}</td>
        </tr>
        <tr>
          <th>Frame 8</th>
          <td>{props.bowlingLog[7][0]}</td>
          /
          <td>{props.bowlingLog[7][1]}</td>
        </tr>
        <tr>
          <th>Frame 9</th>
          <td>{props.bowlingLog[8][0]}</td>
          /
          <td>{props.bowlingLog[8][1]}</td>
        </tr>
        <tr>
          <th>Frame 10</th>
          <td>{props.bowlingLog[9][0]}</td>
          /
          <td>{props.bowlingLog[9][1]}</td>
          /
          <td>{props.bowlingLog[9][2]}</td>
        </tr>
        </div>
        <div>
          Current Total Score: {props.totalScore}
        </div>
      </div>
    )

}


export default Scores;