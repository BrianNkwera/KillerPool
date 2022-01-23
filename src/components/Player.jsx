import React from "react";

function Player(props) {
  // const [isTurn, setTurn] = React.useState(false);


  function handleClick() {
   props.setTurn(props.id)
  }
  
  return (
    <div
      style={{ color: props.inPlay ?  "blue" : "green" }}
      onClick={handleClick}
      className="player container col w-70 mx-auto"
    >
      <h3>{props.name}</h3>
      <h4>{props.points}</h4>
    </div>
  );
}

export default Player;
