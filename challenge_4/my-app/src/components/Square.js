var Square = (props) => {
  return (
    <div onClick={props.handleClick} >
      {/* if the square is null, it hasn't been turned over -- give this a black space with gray border */}
      {props.element}
    </div>

  )

}



export default Square;
