import React, { useState } from "react";
import "./AddPlayerForm.scss";

export default function AddPlayerForm({ addNewPlayer }) {
  const [name, setName] = useState("");
  // console.log(name);

  const addPlayer = () => {
    setName("");
    return addNewPlayer(name);
  };

  return (
    <div className="AddPlayerForm">
      <p>
        Add Player:{" "}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => {
            // console.log("new input .value:", event.target.value);
            setName(event.target.value);
          }}
        />
        <button onClick={addPlayer}>Add</button>
      </p>
    </div>
  );
}
