import React from "react";
import Player from "../Player/Player";
import AddPlayerForm from "../AddPlayerForm/AddPlayerForm";
import "./Scoreboard.css";

export default function Scoreboard() {
  return (
    <div className="Scoreboard">
      <p>Scoreboard</p>
      <Player name="Thomas" />
      <Player name="Ramin" />
      <Player name="Mark" />
      <Player name="Stephanie" />
      <Player name="Boy" />
      <AddPlayerForm />
    </div>
  );
}
