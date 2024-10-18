const {gameOfLife} = require ('./gameOfLife.js');

describe("Game of Life Cell State Transitions", () => {
  test("Live cell with fewer than 2 live neighbours dies (underpopulation)", () => {
    expect(gameOfLife("Live", 0)).toBe("Dead");
    expect(gameOfLife("Live", 1)).toBe("Dead");
  });

  test("Live cell with 2 or 3 live neighbours stays alive", () => {
    expect(gameOfLife("Live", 2)).toBe("Live");
    expect(gameOfLife("Live", 3)).toBe("Live");
  });

  test("Live cell with more than 3 live neighbours dies (overcrowding)", () => {
    expect(gameOfLife("Live", 4)).toBe("Dead");
    expect(gameOfLife("Live", 5)).toBe("Dead");
  });

  test("Dead cell with exactly 3 live neighbours becomes alive", () => {
    expect(gameOfLife("Dead", 3)).toBe("Live");
  });

  test("Dead cell with fewer than 3 live neighbours stays dead", () => {
    expect(gameOfLife("Dead", 0)).toBe("Dead");
    expect(gameOfLife("Dead", 2)).toBe("Dead");
  });

  test("Dead cell with more than 3 live neighbours stays dead", () => {
    expect(gameOfLife("Dead", 4)).toBe("Dead");
    expect(gameOfLife("Dead", 5)).toBe("Dead");
  });
});
