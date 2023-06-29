import React from "react";

const Flash = () => {
  return (
    <div
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
    </div>
  );
};

export default Flash;
