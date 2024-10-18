// Game of Life implementation (for testing purposes)
function gameOfLife(currentState, Neighbours) {
  if (currentState === "Live") {
    // Rule 1: Any live cell with fewer than two live neighbours dies (underpopulation)
    if (Neighbours < 2) {
      return "Dead";
    }
    // Rule 2: Any live cell with more than three live neighbours dies (overcrowding)
    if (Neighbours > 3) {
      return "Dead";
    }
    // Rule 3: Any live cell with two or three live neighbours lives on
    if (Neighbours === 2 || Neighbours === 3) {
      return "Live";
    }
  } else if (currentState === "Dead") {
    // Rule 4: Any dead cell with exactly three live neighbours becomes a live cell
    if (Neighbours === 3) {
      return "Live";
    }
  }
  return currentState;
}

module.exports = {gameOfLife};
