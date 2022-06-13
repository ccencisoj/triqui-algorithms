const { WINNER, LOSER } = require("../constants");

//For dashboards with configuration nxm
function checkWinner(token, dashboard, range) {
  if(!(Array.isArray(dashboard) && Array.isArray(dashboard[0])))
    throw new Error("The dashboard must be a matriz");

  const rowsNum = dashboard.length;
  const columnsNum = dashboard.length;

  const getPositionValue = (position)=> {
    const dashboardRow = dashboard[position.row];
    if(dashboardRow == null) return null;
    const dashboardValue = dashboardRow[position.column];
    return dashboardValue;
  }

  for(let r = 0; r < rowsNum; r++) {
    for(let c = 0; c < columnsNum; c++) {
      const item = dashboard[r][c];
      if(item === token) {
        //from current position to right
        if(new Array(range).fill().map((_, i)=> 
        getPositionValue({row: r, column: c+i}) === token).every((v)=> v))  
        return WINNER;

        //from current position to bottom
        else if(new Array(range).fill().map((_, i)=> 
        getPositionValue({row: r+i, column: c}) === token).every((v)=> v))  
        return WINNER;

        //from current position to diagonal right
        else if(new Array(range).fill().map((_, i)=> 
        getPositionValue({row: r+i, column: c+i}) === token).every((v)=> v))  
        return WINNER;

        //from current position to diagonal left
        else if(new Array(range).fill().map((_, i)=> 
        getPositionValue({row: r+i, column: c-i}) === token).every((v)=> v))  
        return WINNER;
      }
    }
  }
  return LOSER;
}

module.exports = checkWinner;