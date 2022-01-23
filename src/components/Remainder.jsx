import React from "react";

function Remainder(props) {
  return (
    <div className="remaining points container border my-5">
      <h3>remaining points: {props.remainingPoints} </h3>
    </div>
  );
}

export default Remainder;
