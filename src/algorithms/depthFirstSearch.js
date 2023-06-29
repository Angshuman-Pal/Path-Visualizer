export function DFS(grid, startNode, finishNode) {
  const visitedNodesInOrder = [];
  DFSUtil(startNode, finishNode, grid, visitedNodesInOrder);
  return visitedNodesInOrder;
}

function DFSUtil(node, finishNode, grid, visitedNodesInOrder) {
  if (!node.isVisited && !node.isWall) {
    node.isVisited = true;
    visitedNodesInOrder.push(node);
    console.log(node);
    if (node === finishNode) return true;
    const { row, col } = node;
    if (row > 0) {
      if (DFSUtil(grid[row - 1][col], finishNode, grid, visitedNodesInOrder)) {
        grid[row - 1][col].previousNode = node;
        return true;
      }
    }
    if (col < grid[0].length - 1) {
      if (DFSUtil(grid[row][col + 1], finishNode, grid, visitedNodesInOrder)) {
        grid[row][col + 1].previousNode = node;
        return true;
      }
    }
    if (row < grid.length - 1) {
      if (DFSUtil(grid[row + 1][col], finishNode, grid, visitedNodesInOrder)) {
        grid[row + 1][col].previousNode = node;
        return true;
      }
    }
    if (col > 0) {
      if (DFSUtil(grid[row][col - 1], finishNode, grid, visitedNodesInOrder)) {
        grid[row][col - 1].previousNode = node;
        return true;
      }
    }
  }
  return false;
}

export function getNodesInPathOfDFS(finishNode) {
  const nodesInShortestPathOrder = [];
  let currentNode = finishNode;
  while (currentNode !== null) {
    nodesInShortestPathOrder.unshift(currentNode);
    currentNode = currentNode.previousNode;
  }
  return nodesInShortestPathOrder;
}
