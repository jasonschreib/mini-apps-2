//import thw rows component
import Row from './Row.js';

//create component to create child components of 10 rows
var Board = (props) => {
  return (
    <div>
      <div>Hello from the board</div>
      {/* create a div for all the row components */}
      <div>
        <Row contents={props.board[0]} handleClick={props.handleClick}/>
        <Row contents={props.board[1]} handleClick={props.handleClick}/>
        <Row contents={props.board[2]} handleClick={props.handleClick}/>
        <Row contents={props.board[3]} handleClick={props.handleClick}/>
        <Row contents={props.board[4]} handleClick={props.handleClick}/>
        <Row contents={props.board[5]} handleClick={props.handleClick}/>
        <Row contents={props.board[6]} handleClick={props.handleClick}/>
        <Row contents={props.board[7]} handleClick={props.handleClick}/>
        <Row contents={props.board[8]} handleClick={props.handleClick}/>
        <Row contents={props.board[9]} handleClick={props.handleClick}/>
      </div>
    </div>
  )
}

export default Board;
