import React, { useState } from "react";
import Player from "../Player/Player";
import AddPlayerForm from "../AddPlayerForm/AddPlayerForm";
import "./Scoreboard.css";

function compareScore(playerA, playerB) {
  return playerB["score"] - playerA["score"];
}

function compareName(playerA, playerB) {
  return playerA["name"].localeCompare(playerB["name"], "en", {
    ignorePunctuation: true,
  });
}

export default function Scoreboard() {
  const [sortBy, setSortBy] = useState("score");
  const [players, setPlayers] = useState([
    { id: 1, name: "Thomas", score: 11 },
    { id: 2, name: "Ramin", score: 14 },
    { id: 3, name: "Mark", score: 4 },
    { id: 4, name: "Stephanie", score: 42 },
  ]);

  const changeSorting = (event) => {
    // change the value of the sortBy state which will be used by playersSorted
    console.log("New sorting order:", event.target.value);
    setSortBy(event.target.value);
  };

  // const sortByScore = [...players].sort(compareScore);
  // const sortByName = [...players].sort(compareName);

  const playersSorted = // from here on out you have to use this constant instead of {players}
    sortBy === "score"
      ? [...players].sort(compareScore) // copying the array so that .sort can change the array
      : [...players].sort(compareName);

  const playerComponents = playersSorted.map((player) => {
    // map over the new array and destructure it and return the component
    const { id, name, score } = player;

    return <Player key={id} id={id} name={name} score={score} />;
  });

  const sortOrder = (
    <p>
      Sort order:{" "}
      <select onChange={changeSorting} value={sortBy}>
        <option value="score">Sort by score</option>
        <option value="name">Sort by name</option>
      </select>
    </p>
  );

  return (
    <div className="Scoreboard">
      <p>Scoreboard</p>
      {sortOrder} {/* Button to sort the order */}
      {playerComponents} {/* Call the variable with the sorted array */}
      <AddPlayerForm />
    </div>
  );
}
