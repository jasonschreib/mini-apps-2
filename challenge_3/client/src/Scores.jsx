import React from 'react';
import ReactDOM from 'react-dom';

function Scores (props) {

    console.log('SCORES COMP', props.currentFrame);
    return (
      <div>
        Current Frame: {props.currentFrame} / 10
        {/* Iterate over the  */}
      </div>
    )

}

export default Scores;