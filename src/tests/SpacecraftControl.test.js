import { expect } from "chai";
import handleCommand from "../Components/handleCommands.js";

describe("handleCommand Script", () => {
  it("handles moveForward command", () => {
    const result = handleCommand(["f"], "N");
    expect(result.position.y).to.equal(1);
    expect(result.dir).to.equal("N");
  });

  it("handles moveBackward command", () => {
    const result = handleCommand(["b"], "N");
    expect(result.position.y).to.equal(-1);
    expect(result.dir).to.equal("N");
  });

  it("handles turnLeft command", () => {
    const result = handleCommand(["l"], "N");
    expect(result.dir).to.equal("W");
  });

  it("handles turnRight command", () => {
    const result = handleCommand(["r"], "N");
    expect(result.dir).to.equal("E");
  });

  it("handles turnUp command", () => {
    const result = handleCommand(["u"], "N");
    expect(result.dir).to.equal("Up");
  });

  it("handles turnDown command", () => {
    const result = handleCommand(["d"], "N");
    expect(result.dir).to.equal("Down");
  });

  // Add more test cases for different commands and directions
});
