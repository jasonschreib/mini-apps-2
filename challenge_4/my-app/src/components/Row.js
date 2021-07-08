import Square from './Square.js';

var Row = (props) => {
  return (
    <div>
      {/* create a circle for each element in the row */}
      <Square element={props.contents[0]} handleClick={() => props.handleClick(0)}/>
      <Square element={props.contents[1]} handleClick={() => props.handleClick(1)}/>
      <Square element={props.contents[2]} handleClick={() => props.handleClick(2)}/>
      <Square element={props.contents[3]} handleClick={() => props.handleClick(3)}/>
      <Square element={props.contents[4]} handleClick={() => props.handleClick(4)}/>
      <Square element={props.contents[5]} handleClick={() => props.handleClick(5)}/>
      <Square element={props.contents[6]} handleClick={() => props.handleClick(6)}/>
      <Square element={props.contents[6]} handleClick={() => props.handleClick(6)}/>
      <Square element={props.contents[6]} handleClick={() => props.handleClick(6)}/>
      <Square element={props.contents[6]} handleClick={() => props.handleClick(6)}/>
    </div>
  )
}

export default Row;