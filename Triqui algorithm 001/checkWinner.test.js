const checkWinner = require("./checkWinner");
const { WINNER, LOSER } = require("../constants");

test("Winner dashboard 3x3", ()=> {
  const token = 1;
  const range = 3;
  const dashboard = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
  ];
  const result = checkWinner(token, dashboard, range);
  expect(result).toBe(WINNER);
});

test("Loser dashboard 3x3", ()=> {
  const token = 1;
  const range = 3;
  const dashboard = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
  ];
  const result = checkWinner(token, dashboard, range);
  expect(result).toBe(LOSER);
});

test("Winner dashboard 2x3", ()=> {
  const token = 1;
  const range = 3;
  const dashboard = [
    [1, 1, 1],
    [0, 0, 0]
  ];
  const result = checkWinner(token, dashboard, range);
  expect(result).toBe(WINNER);
});

test("Winner dashboard 5x5", ()=> {
  const token = 1;
  const range = 3;
  const dashboard = [
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
  ];
  const result = checkWinner(token, dashboard, range);
  expect(result).toBe(WINNER);
});

test("Winner dashboard 5x5 with range 5", ()=> {
  const token = 1;
  const range = 5;
  const dashboard = [
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
  ];
  const result = checkWinner(token, dashboard, range);
  expect(result).toBe(WINNER);
});

test("Loser dashboard 5x5 with range 5", ()=> {
  const token = 1;
  const range = 5;
  const dashboard = [
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
  ];
  const result = checkWinner(token, dashboard, range);
  expect(result).toBe(LOSER);
});