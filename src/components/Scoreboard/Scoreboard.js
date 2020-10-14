import React, { useState } from "react";
import Player from "../Player/Player";
import AddPlayerForm from "../AddPlayerForm/AddPlayerForm";
import "./Scoreboard.scss";

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

  const incrementScore = (id) => {
    // console.log("id?", id);
    const updatedPlayer = players.map((player) =>
      player.id === id ? { ...player, score: player.score + 1 } : player
    );
    setPlayers(updatedPlayer);
  };

  const decrementScore = (id) => {
    // console.log("id?", id);
    const updatedPlayer = players.map((player) =>
      player.id === id
        ? player.score > 0
          ? { ...player, score: player.score - 1 }
          : player
        : player
    );
    setPlayers(updatedPlayer);
  };

  const resetScore = (id) => {
    // console.log("id?", id);
    const resetScorePlayer = players.map((player) =>
      player.id === id ? { ...player, score: 0 } : player
    );
    setPlayers(resetScorePlayer);
  };

  const resetAllScore = () => {
    const resetScoreAllPlayers = players.map((player) =>
      player ? { ...player, score: 0 } : player
    );
    setPlayers(resetScoreAllPlayers);
  };

  const addNewPlayer = (name) => {
    // console.log("Let's add a new player with the name:", name, typeof name); // gives the new name in string

    const playerExists = players.find((player) => {
      return player.name === name;
    });
    if (!playerExists) {
      setPlayers([
        ...players, //copying the existing array
        { id: players.length + 1, name: name, score: 0 }, // add the new player
      ]);
    } else {
      alert("This name already exists");
    }
  };

  const removePlayer = (id) => {
    const newPlayerList = players.filter((player) =>
      player.id !== id ? player : false
    );
    setPlayers(newPlayerList);
  };

  //   const newPlayerList = players.map((player) =>
  //     player.id === id ? {} : player
  //   );
  //   setPlayers(newPlayerList);
  // };

  const playerComponents = playersSorted.map((player) => {
    // map over the new array and destructure it and return the component
    const { id, name, score } = player;

    return (
      <Player
        key={id}
        id={id}
        name={name}
        score={score}
        incrementScore={incrementScore}
        decrementScore={decrementScore}
        resetScore={resetScore}
        removePlayer={removePlayer}
      />
    );
  });

  const sortOrder = (
    <div className="sort_dropdown">
      Sort order:{" "}
      <p className="sort_order">
        <select onChange={changeSorting} value={sortBy}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
      </p>
    </div>
  );

  return (
    <div className="Scoreboard">
      <h2>Players</h2>{" "}
      <button className="reset_score" onClick={resetAllScore}>
        Reset scores
      </button>
      {sortOrder} {/* Button to sort the order */}
      {playerComponents} {/* Call the variable with the sorted array */}
      <AddPlayerForm addNewPlayer={addNewPlayer} />
    </div>
  );
}
