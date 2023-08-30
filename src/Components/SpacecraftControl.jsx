import React from "react";
import { useState } from "react";
import handleCommand from "./handleCommands";

const SpacecraftControl = () => {
  const [positionR, setPositionR] = useState({ x: 0, y: 0, z: 0 });
  const [direction, setDirection] = useState("N");
  const [commands, setCommands] = useState([]);

  const handleCommands = () => {
    const result = handleCommand(commands, direction);

    setPositionR(result.position);
    setDirection(result.dir);
    console.log(positionR);

    document.getElementById("command").value = "";
  };

  return (
    <div>
      <h1>Spacecraft Control</h1>
      <div>
        <p>
          Position: X: {positionR.x}, Y: {positionR.y}, Z: {positionR.z}
        </p>
        <p>Direction: {direction}</p>
      </div>
      <div>
        <input
          type="text"
          placeholder="Add Command"
          id="command"
          onChange={(e) => setCommands([e.target.value])}
        />
        <button onClick={() => handleCommands()}>Execute</button>
      </div>
    </div>
  );
};

export default SpacecraftControl;
