// import './App.css';
import React, { Component } from 'react';
//import the board
import Board from './Board.js';

class GamePlay extends Component () {
  constructor(props) {
    super(props);
    this.state = {
      //initial gameBoard is represented by a board with all null values
      gameBoard:
      [
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null]
      ],
  }

    this.handleClickOnSquare = this.handleClickOnSquare.bind(this);
  }

  componentDidMount() {

  }

  //function to handle click of a square
  handleClickOnSquare() {

  }

  render() {
    return (
      <div className="GameBoard">
        Yoyo
        <Board board={this.state.board} handleClick={this.handleClickOnBoard} />
      </div>
    );
  }
}

export default GamePlay;
