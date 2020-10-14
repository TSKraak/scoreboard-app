import React from "react";
import "./Player.css";

export default function Player({ id, name, score }) {
  return (
    <div>
      <li className="Player">
        <p>
          {name}, score: {score}
        </p>
      </li>
    </div>
  );
}
