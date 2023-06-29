import React, { Component } from "react";
import NavBar from "../components/navbar/navbar";
import Footer from "../components/footer";
import Flash from "../components/flash";
import Node from "./Node/Node";
import { dijkstra, getNodesInShortestPathOrder } from "../algorithms/dijkstra";
import { BFS, getNodesInPathOfBFS } from "../algorithms/breadthFirstSearch";
import { DFS, getNodesInPathOfDFS } from "../algorithms/depthFirstSearch";

import {
  getNewGridWithWallToggled,
  getNewGridWithRemovedStart,
  getNewGridWithRemovedEnd,
  getNewGridWithMovedStart,
  getNewGridWithMovedEnd,
} from "../helpers/getNewGrid";

import { getInitialGrid } from "../helpers/gridInitialize";

import "./PathFinding.css";

export default class PathFinding extends Component {
  constructor() {
    super();
    this.state = {
      grid: [],
      mouseIsPressed: false,
      isPathFinded: false,
      START_NODE_ROW: 10,
      START_NODE_COL: 15,
      END_NODE_ROW: 10,
      END_NODE_COL: 35,
      isStartPresent: true,
      isEndPresent: true,
      isRunning: false,
    };
  }

  componentDidMount() {
    const { START_NODE_COL, START_NODE_ROW, END_NODE_COL, END_NODE_ROW } =
      this.state;
    const grid = getInitialGrid(
      START_NODE_COL,
      START_NODE_ROW,
      END_NODE_COL,
      END_NODE_ROW
    );
    this.setState({ grid });
  }

  handleMouseDownStart(row, col) {
    if (this.state.isPathFinded) return;
    const newGrid = getNewGridWithRemovedStart(this.state.grid, row, col);
    this.setState({
      grid: newGrid,
      mouseIsPressed: true,
      isStartPresent: false,
    });
  }
  handleMouseDownEnd(row, col) {
    if (this.state.isPathFinded) return;
    const newGrid = getNewGridWithRemovedEnd(this.state.grid, row, col);
    this.setState({ grid: newGrid, mouseIsPressed: true, isEndPresent: false });
  }
  handleMouseDown(row, col) {
    if (this.state.isPathFinded) return;
    const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
    this.setState({ grid: newGrid, mouseIsPressed: true });
  }

  handleMouseEnter(row, col) {
    if (this.state.isPathFinded) return;
    if (!this.state.mouseIsPressed) return;
    const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
    this.setState({ grid: newGrid });
  }

  handleMouseUpStart(row, col) {
    if (this.state.isPathFinded) return;
    const newGrid = getNewGridWithMovedStart(this.state.grid, row, col);
    this.setState({
      grid: newGrid,
      mouseIsPressed: false,
      isStartPresent: true,
      START_NODE_COL: col,
      START_NODE_ROW: row,
    });
  }
  handleMouseUpEnd(row, col) {
    if (this.state.isPathFinded) return;
    const newGrid = getNewGridWithMovedEnd(this.state.grid, row, col);
    this.setState({
      grid: newGrid,
      mouseIsPressed: false,
      isEndPresent: true,
      END_NODE_COL: col,
      END_NODE_ROW: row,
    });
  }
  handleMouseUp() {
    if (this.state.isPathFinded) return;
    this.setState({ mouseIsPressed: false });
  }

  animatePathSearching(visitedNodesInOrder, nodesInShortestPathOrder) {
    this.setState({ isRunning: true });
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          this.animatePath(nodesInShortestPathOrder);
          this.setState({ isPathFinded: true });
          this.setState({ isRunning: false });
        }, 10 * i);

        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        document.getElementById(
          `node-${node.row}-${node.col}`
        ).className = `node node-visited`;
      }, 10 * i);
    }
  }

  animatePath(nodesInShortestPathOrder) {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        document.getElementById(
          `node-${node.row}-${node.col}`
        ).className = `node node-shortest-path`;
      }, 50 * i);
    }
  }

  visualizeDijkstra() {
    const { grid, START_NODE_COL, START_NODE_ROW, END_NODE_COL, END_NODE_ROW } =
      this.state;
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const endNode = grid[END_NODE_ROW][END_NODE_COL];
    const visitedNodesInOrder = dijkstra(grid, startNode, endNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(endNode);
    this.animatePathSearching(visitedNodesInOrder, nodesInShortestPathOrder);
  }

  visualizeBFS() {
    const { grid, START_NODE_COL, START_NODE_ROW, END_NODE_COL, END_NODE_ROW } =
      this.state;
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const endNode = grid[END_NODE_ROW][END_NODE_COL];
    const visitedNodesInOrder = BFS(grid, startNode, endNode);
    const nodesInPathOfBFS = getNodesInPathOfBFS(endNode);
    this.animatePathSearching(visitedNodesInOrder, nodesInPathOfBFS);
  }

  visualizeDFS() {
    const { grid, START_NODE_COL, START_NODE_ROW, END_NODE_COL, END_NODE_ROW } =
      this.state;
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const endNode = grid[END_NODE_ROW][END_NODE_COL];
    const visitedNodesInOrder = DFS(grid, startNode, endNode);
    const nodesInPathOfDFS = getNodesInPathOfDFS(endNode);
    this.animatePathSearching(visitedNodesInOrder, nodesInPathOfDFS);
  }

  render() {
    const {
      grid,
      mouseIsPressed,
      START_NODE_COL,
      START_NODE_ROW,
      END_NODE_COL,
      END_NODE_ROW,
      isStartPresent,
      isEndPresent,
      isPathFinded,
      isRunning,
    } = this.state;

    return (
      <>
        <NavBar />
        <div className="button-container">
          <a href="/" className="btn btn-outline-danger me-3">
            Refresh
          </a>
          <button
            onClick={() => this.visualizeDijkstra()}
            className="btn btn-outline-primary"
            disabled={isPathFinded || isRunning}
          >
            Visualize Dijkstra's Algorithm
          </button>

          <button
            className="btn btn-outline-success ms-3 me-3"
            onClick={() => this.visualizeBFS()}
            disabled={isPathFinded || isRunning}
          >
            Visualize BFS
          </button>

          <button
            className="btn btn-outline-dark"
            onClick={() => this.visualizeDFS()}
            disabled={isPathFinded || isRunning}
          >
            Visualize DFS
          </button>
        </div>
        {/* <div
          className="alert alert-warning alert-dismissible fade show m-5"
          role="alert"
        >
          <ul className="list-group list-group-flush">
            <li className="list-group-item bg-light bg-gradient">
              Dijkstra Algorithm ensures Shortest Path
            </li>
            <li className="list-group-item">
              BFS and DFS don't ensure Shortest Path
            </li>
            <li className="list-group-item bg-light bg-gradient">
              User can move Origin and Distination anywhere in the Grid
            </li>
            <li className="list-group-item">
              User can make walls by Left-Clicking in the Grid
            </li>
            <li className="list-group-item bg-light bg-gradient">
              And we are currently working on more functionalities and design of
              this Page. Thankyou!
            </li>
          </ul>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div> */}
        <Flash />

        <div className="grid">
          {grid.map((row, rowIdx) => {
            return (
              <div className="grid-row" key={rowIdx}>
                {row.map((node, nodeIdx) => {
                  const { row, col, isEnd, isStart, isWall } = node;
                  return (
                    <Node
                      key={nodeIdx}
                      col={col}
                      isEnd={isEnd}
                      isStart={isStart}
                      isWall={isWall}
                      mouseIsPressed={mouseIsPressed}
                      isStartPresent={isStartPresent}
                      isEndPresent={isEndPresent}
                      onMouseDown={(row, col) => {
                        if (START_NODE_COL === col && START_NODE_ROW === row) {
                          this.handleMouseDownStart(row, col);
                        } else if (
                          END_NODE_COL === col &&
                          END_NODE_ROW === row
                        ) {
                          this.handleMouseDownEnd(row, col);
                        } else {
                          this.handleMouseDown(row, col);
                        }
                      }}
                      onMouseEnter={(row, col) => {
                        if (isEndPresent && isStartPresent)
                          this.handleMouseEnter(row, col);
                      }}
                      onMouseUp={(row, col) => {
                        if (!isStartPresent) {
                          this.handleMouseUpStart(row, col);
                        } else if (!isEndPresent) {
                          this.handleMouseUpEnd(row, col);
                        } else {
                          this.handleMouseUp();
                        }
                      }}
                      row={row}
                    ></Node>
                  );
                })}
              </div>
            );
          })}
        </div>
        <Footer />
      </>
    );
  }
}
