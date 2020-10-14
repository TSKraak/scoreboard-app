import React from "react";
import "./Player.scss";

export default function Player({
  id,
  name,
  score,
  incrementScore,
  decrementScore,
  resetScore,
  removePlayer,
}) {
  const onClickIncrement = () => {
    return incrementScore(id);
  };

  const onClickDecrement = () => {
    return decrementScore(id);
  };

  const onClickReset = () => {
    return resetScore(id);
  };

  const onClickRemove = () => {
    return removePlayer(id);
  };

  return (
    <div>
      <div className="Player">
        <div className="percentage_coloring" style={{ width: score + "%" }} />
        <p>
          {name}, Score: {score}
          <button className="increment" onClick={onClickIncrement}>
            +
          </button>
          <button className="decrement" onClick={onClickDecrement}>
            -
          </button>
          <button className="reset" onClick={onClickReset}>
            Reset score
          </button>
          <button className="remove-player" onClick={onClickRemove}>
            Remove player
          </button>
        </p>
      </div>
    </div>
  );
}

// <div>
//   <li className="Player" key={id}>
//     <div className="percentage_coloring" style={{ width: score + "%" }} />
//     <p>
//       {name}, Score: {score}
//       <button onClick={onClickIncrement}>Score +1</button>
//     </p>
//   </li>
// </div>;
