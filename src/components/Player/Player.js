import React from "react";
import "./Player.css";

export default function Player({ name }) {
  return (
    <div>
      <li className="Player">
        <p>{name}</p>
      </li>
    </div>
  );
}
