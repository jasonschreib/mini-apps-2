//function to calculate the score throughout the game
function calculateScore (bowls) {
  console.log('in the calculate score function', bowls);
  //using the bowling log, calculate the score
  //set an initial variable for the score
  var totalScore = 0;
  debugger;
  //iterate over the bowlingLog array
  for (var i = 0; i < bowls.length; i++) {
    //create temp frameScore var and set to 0
    var frameScore = 0;
    //special case if it's the tenth frame
    if (i === 9) {
      //just add all the numbers in the array together
      for (var j = 0; j < bowls[9].length; j++) {
        frameScore += bowls[9][j];
      }
      totalScore += frameScore;
      break;
    }

    //calculate the score for each inner array - if the score for the current array is a strike
    if (bowls[i][0] === 10) {
      console.log('strike');
      //set framescore equal to 10 plus the next 2 bowls - if the next shot was a strike
      if (bowls[i + 1][0] === 10 && i < 8) {
        console.log('strike2');
        frameScore = 10 + 10 + bowls[i + 2][0];
      } else {
        frameScore = 10 + bowls[i + 1][0] + bowls[i + 1][1]
      }
      //otherwise if the score for the current array is a spare
    } else if (bowls[i][0] + bowls[i][1] === 10) {
      //set the framescore equal to 10 plus the next bowl
      frameScore = 10 + bowls[i + 1][0];
      //otherwise
    } else {
      console.log('regular addition score');
      //set the framescore equal to the first and second bowls of the frame
      frameScore = bowls[i][0] + bowls[i][1];
    }
    //add the temp frame score to the total score
    totalScore += frameScore;
  }
  //if the total score is NaN,
  if (isNaN(totalScore)) {
    console.log('NaN');
    //then just set it to calculating string
    totalScore = 'calculating...bowl again to calculate score for frame';
  }
  //update the state with this score
  return totalScore;
};


  module.exports = {calculateScore};

