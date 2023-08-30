let position = { x: 0, y: 0, z: 0 };
let dir = "";

const handleCommand = (commands, direction) => {
  console.log(commands);
  const moveForward = () => {
    // Update the position based on the current direction
    switch (direction) {
      case "N":
        position.y += 1;
        dir = direction;
        break;
      case "S":
        position.y -= 1;
        dir = direction;
        break;
      case "E":
        position.x += 1;
        dir = direction;
        break;
      case "W":
        position.x -= 1;
        dir = direction;
        break;
      case "Up":
        position.z += 1;
        dir = direction;
        break;
      case "Down":
        position.z--;
        dir = direction;
        break;
      default:
        break;
    }
  };

  const moveBackward = () => {
    // Similar to moveForward but in the opposite direction
    switch (direction) {
      case "N":
        position.y -= 1;
        dir = direction;
        break;
      case "S":
        position.y += 1;
        dir = direction;
        break;
      case "E":
        position.x -= 1;
        dir = direction;
        break;
      case "W":
        position.x += 1;
        dir = direction;
        break;
      case "Up":
        position.z -= 1;
        dir = direction;
        break;
      case "Down":
        position.z += 1;
        dir = direction;
        break;
      default:
        break;
    }
  };

  const turnLeft = () => {
    // Update the direction by rotating 90 degrees counterclockwise
    switch (direction) {
      case "N":
        dir = "W";
        break;
      case "S":
        dir = "E";
        break;
      case "E":
        dir = "N";
        break;
      case "W":
        dir = "S";
        break;
      case "Up":
        dir = "N";
        break;
      case "Down":
        dir = "S";
        break;
      default:
        break;
    }
  };

  const turnRight = () => {
    // Update the direction by rotating 90 degrees clockwise
    switch (direction) {
      case "N":
        dir = "E";
        break;
      case "S":
        dir = "W";
        break;
      case "E":
        dir = "S";
        break;
      case "W":
        dir = "N";
        break;
      case "Up":
        dir = "S";
        break;
      case "Down":
        dir = "N";
        break;
      default:
        break;
    }
  };

  const turnUp = () => {
    // Update the direction to 'Up'
    dir = "Up";
  };

  const turnDown = () => {
    // Update the direction to 'Down'
    dir = "Down";
  };

  // Process the commands and update the state accordingly
  for (const command of commands) {
    console.log(command);
    if (command === "f") {
      moveForward();
    } else if (command === "b") {
      moveBackward();
    } else if (command === "l") {
      turnLeft();
    } else if (command === "r") {
      turnRight();
    } else if (command === "u") {
      turnUp();
    } else if (command === "d") {
      turnDown();
    }
  }
  console.log({ position, dir });
  return { position, dir };
};

export default handleCommand;
