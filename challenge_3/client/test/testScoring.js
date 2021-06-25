const chai = require('chai');
const expect = chai.expect;

//import the calculate score function from outside module
const {calculateScore} = require('../scoring/scoringCalculator.js');

//a collection of test cases that test a specific component
describe("scoring function works as expected", () => {
  var bowlingLog = [];
  describe("check gutter game", () => {
    before(()=> {
      bowlingLog = [[0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0]];
    });
    //test a function for a specific case
    it("should return sum of 0 for gutter game", ()=> {
      //call the scoring function with the bowling log
      expect(calculateScore(bowlingLog)).to.equal(0);
    });
  });
  describe("check perfect game", () => {
    before(()=> {
      bowlingLog = [[10], [10], [10], [10], [10], [10], [10], [10], [10], [10, 10, 10]];
    });
    it("should return sum of 300 for perfect game", () => {
      expect(calculateScore(bowlingLog)).to.equal(300);
    });
  });

  describe("check regular gameplay", () => {
    it("should correctly calculate spare", () => {

    });

    it("should correctly calculate strike", () => {

    });
  });

  it("should take care of score not being updated for strikes and spares mid-game (because of the next 2 shots added to score for strike and next score added for spare", () => {

	});

});