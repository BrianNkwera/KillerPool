import React, { useEffect } from "react";
import Player from "./Player";
import Ball from "./Ball";
import Remainder from "./Remainder";
import GameOver from "./GameOver";
import { balls, players } from "../arrays";

function App() {
  /*Public state 1. To manipulate players' attributes such as points 
  and player's turn to play. Takes the players' array as the initial 
  value */
  const [playersScore, setScore] = React.useState(players);

  /*public state 2 to set total potted points once a ball is potted*/
  const [pottedPoints, setPottedPoints] = React.useState(0);

  //public state to set the difference between the two hightest scored point*/
  const [maxPointsRange, setmaxPointsRange] = React.useState(0);

  const remainingPoints = 132 - pottedPoints;

  /*The value of props.setTurn of Player comp. called 
  when a player is clicked.*/
  function setTurn(id) {
    /*specify which player is in turn */

    setScore((prev) => {
      /*mapping through each element of the array containing
      previous values of players attributes*/

      return prev.map((player, index) => {
        //change the player's turn for the player of specified id(selected player) */
        if (index == id) {
          return { ...player, inPlay: !player.inPlay };
        } else {
          //for non selected player change playerTurn to false
          return { ...player, inPlay: false };
        }
      });
    });
  }

  //add points to player in play when a ball is potted
  function addPoints(score) {
    setScore((prev) => {
      return prev.map((player, index) => {
        if (player.inPlay) {
          //adds the total points potted when a player is in play.
          setPottedPoints((prev) => {
            return score + prev;
          });

          /*returns the previous values of player array adding the
          balls potted to the score*/
          return { ...player, score: score + player.score };
        } else {
          /**if a player is not in play then just render his original marks */
          return { ...player };
        }
      });
    });
  }

  //App returns componets to be rendered
  return (
    <div className="container px-5">
      <div className="App row container border">
        {playersScore.map(createPlayer)}
      </div>

      {remainingPoints < maxPointsRange && <GameOver />}

      <div className="balls row row-cols-3 row-cols-md-4 container my-5 border mx-auto px-5">
        {balls.map(createBall)}
      </div>

      <Remainder remainingPoints={remainingPoints} />
    </div>
  );

  /************mapping functions**********/

  //function for creating a player from players array
  function createPlayer(player, index) {
    return (
      <Player
        key={index}
        id={index}
        inPlay={player.inPlay}
        name={player.name}
        points={player.score}
        setTurn={setTurn}
      />
    );
  }

  //function for creating a ball from balls array
  function createBall(ball, index) {
    return (
      <Ball
        key={index}
        points={ball.points}
        url={ball.name}
        pointScored={addPoints}
      />
    );
  }
}

export default App;
