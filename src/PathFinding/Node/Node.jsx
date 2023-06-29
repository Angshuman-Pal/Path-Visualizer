import React, { Component } from "react";
import "./Node.css";

export default class Node extends Component {
  render() {
    const {
      col,
      isEnd,
      isStart,
      isWall,
      onMouseDown,
      onMouseEnter,
      onMouseUp,
      row,
      isStartPresent,
      isEndPresent,
    } = this.props;
    const extraClassName = isEnd
      ? "node-end"
      : isStart
      ? "node-start"
      : isWall
      ? "node-wall"
      : "";

    return (
      <div
        id={`node-${row}-${col}`}
        className={`node ${extraClassName}`}
        onMouseDown={() => onMouseDown(row, col)}
        onMouseEnter={() => onMouseEnter(row, col)}
        onMouseUp={() => {
          if (isEndPresent || isStartPresent) {
            onMouseUp(row, col);
          } else {
            onMouseUp();
          }
        }}
      >
        {isStart ? <span class="material-icons">home</span> : ""}
        {isEnd ? <span class="material-icons">location_on</span> : ""}
      </div>
    );
  }
}
