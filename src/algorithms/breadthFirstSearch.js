export function BFS(grid, startNode, finishNode) {
  const visitedNodesInOrder = [];
  const queue = [];
  queue.push(startNode);
  startNode.isVisited = true;
  const x = [-1, 1, 0, 0];
  const y = [0, 0, -1, 1];
  while (!!queue.length) {
    let l = queue.length;
    for (let i = 0; i < l; i++) {
      const closestNode = queue.shift();
      if (closestNode.isWall) continue;
      visitedNodesInOrder.push(closestNode);
      if (closestNode === finishNode) return visitedNodesInOrder;
      for (let k = 0; k < 4; k++) {
        const { col, row } = closestNode;
        let X = row + x[k],
          Y = col + y[k];
        if (
          isSafe(grid.length, grid[0].length, X, Y) &&
          !grid[X][Y].isVisited
        ) {
          grid[X][Y].previousNode = closestNode;
          grid[X][Y].isVisited = true;
          queue.push(grid[X][Y]);
        }
      }
    }
  }
  return visitedNodesInOrder;
}

function isSafe(n, m, x, y) {
  return x >= 0 && x < n && y >= 0 && y < m;
}

export function getNodesInPathOfBFS(finishNode) {
  const nodesInShortestPathOrder = [];
  let currentNode = finishNode;
  while (currentNode !== null) {
    nodesInShortestPathOrder.unshift(currentNode);
    currentNode = currentNode.previousNode;
  }
  return nodesInShortestPathOrder;
}
