const { WINNER, LOSER } = require("../constants");

const combinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
];
//For dashboards with configuration 3x3
function checkWinner(token, dashboard) {
  if(!(Array.isArray(dashboard) && dashboard.length === 9))
    throw new Error("the dashboard must be a array of length 3");
  
  for (let combination of combinations) {
    if (combination.every((position)=> dashboard[position] === token)) {
      return WINNER;
    }
  }

  return LOSER;
}

module.exports = checkWinner;