import React from "react";
import Title from "./components/Title/Title";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Title />
      <main>
        <Scoreboard />
      </main>
    </div>
  );
}

export default App;
