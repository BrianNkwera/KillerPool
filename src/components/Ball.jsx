import React from "react";

function Ball(props) {
  const [isHovered, setHoverState] = React.useState(false);
  const [isClicked, setClickedState] = React.useState(false);
  

  function handleClick() {
    setClickedState(function(prevValue){
      return !prevValue;
    });

     props.pointScored(props.points);
  }

  function handleHover() {
    setHoverState(true);
  }

  function handleLeave() {
    setHoverState(false);
  }

  return (
    <div className="col my-4">
      <img
        src={props.url}
        style={{
          backgroundColor: isHovered ? "black" : "inherit",
          opacity: isClicked ? "0.2" : "1",
        }}
        className="ball h-100 py-1 px-1"
        onClick={handleClick}
        onMouseOver={handleHover}
        onMouseOut={handleLeave}
      ></img>
    </div>
  );
}

export default Ball;
