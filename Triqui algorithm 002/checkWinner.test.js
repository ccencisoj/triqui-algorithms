const checkWinner = require("./checkWinner");
const { WINNER, LOSER } = require("../constants");

test("Winner dashboard 3x3", ()=> {
  const token = 1;
  const dashboard = [
    0, 1, 0,
    1, 1, 0,
    0, 1, 0
  ];
  const result = checkWinner(token, dashboard);
  expect(result).toBe(WINNER);
}); 

test("Loser dashboard 3x3", ()=> {
  const token = 1;
  const dashboard = [
    0, 1, 0,
    1, 1, 0,
    0, 0, 0
  ];
  const result = checkWinner(token, dashboard);
  expect(result).toBe(LOSER);
}); 


test("Dashboard 4x4 not suported", ()=> {
  const token = 1;
  const dashboard = [
    0, 1, 0, 0, 
    1, 1, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0
  ];
  
  try {
    checkWinner(token, dashboard);
  }catch(error) {
    expect(error).not.toBe(null);
  }
}); 