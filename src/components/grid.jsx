// components/Grid.js
import React from "react";
import "./grid.css";
import Cell from "./Cell";

const Grid = () => {
  // Create a state to store the grid's state
  const [gridState, setGridState] = useState(Array(10).fill(Array(10).fill('empty')));

  // Render the grid based on gridState
  return (
    <div className="grid">
      {gridState.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, cellIndex) => (
            <Cell key={cellIndex} state={cell} onCellClick={() => handleCellClick(rowIndex, cellIndex)} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
