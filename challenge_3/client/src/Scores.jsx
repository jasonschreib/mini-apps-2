import React from 'react';
import ReactDOM from 'react-dom';

function Scores (props) {

    console.log('SCORES COMP', props.currentFrame);
    return (
      <div>
        <h2>Scoring:</h2>
        Current Frame: {props.currentFrame} / 10
        {/* Iterate over the  */}
      </div>
    )

}

export default Scores;