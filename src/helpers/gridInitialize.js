export function getInitialGrid(
  START_NODE_COL,
  START_NODE_ROW,
  END_NODE_COL,
  END_NODE_ROW
) {
  const grid = [];
  for (let row = 0; row < 20; row++) {
    const currentRow = [];
    for (let col = 0; col < 50; col++) {
      currentRow.push(
        createNode(
          col,
          row,
          START_NODE_COL,
          START_NODE_ROW,
          END_NODE_COL,
          END_NODE_ROW
        )
      );
    }
    grid.push(currentRow);
  }
  return grid;
}

const createNode = (
  col,
  row,
  START_NODE_COL,
  START_NODE_ROW,
  END_NODE_COL,
  END_NODE_ROW
) => {
  return {
    row,
    col,
    isStart: row === START_NODE_ROW && col === START_NODE_COL,
    isEnd: row === END_NODE_ROW && col === END_NODE_COL,
    distance: Infinity,
    isVisited: false,
    isWall: false,
    previousNode: null,
  };
};
