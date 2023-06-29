export function getNewGridWithWallToggled(grid, row, col) {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isWall: !node.isWall,
  };
  newGrid[row][col] = newNode;
  return newGrid;
}

export function getNewGridWithRemovedStart(grid, row, col) {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isStart: false,
    isWall: false,
  };
  newGrid[row][col] = newNode;
  return newGrid;
}

export function getNewGridWithMovedStart(grid, row, col) {
  const newGrid = grid.slice();
  console.log(newGrid, row, col);
  const node = newGrid[row][col];
  console.log(node);
  const newNode = {
    ...node,
    isStart: true,
    isWall: false,
  };
  newGrid[row][col] = newNode;
  return newGrid;
}

export function getNewGridWithRemovedEnd(grid, row, col) {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isEnd: false,
    isWall: false,
  };
  newGrid[row][col] = newNode;
  return newGrid;
}

export function getNewGridWithMovedEnd(grid, row, col) {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isEnd: true,
    isWall: false,
  };
  newGrid[row][col] = newNode;
  return newGrid;
}
