// App.js
import React, { useState, useEffect } from "react";
import "./App.css";

const uniqueId = () => {
  return `id_${Math.random().toString(36).substr(2, 9)}`;
};

const App = () => {
  const gridSize = 4;
  const totalCells = gridSize * gridSize;
  const [gridState, setGridState] = useState(Array(gridSize).fill(Array(gridSize).fill('empty')));
  const chickenCount = gridState.flat().filter(cell => cell === 'chicken').length;
  const eggCount = gridState.flat().filter(cell => cell === 'egg').length;

  const updateCellState = (x, y, newState) => {
    const newGridState = gridState.map((row, rowIndex) => {
      if (rowIndex === y) {
        return row.map((cell, cellIndex) => {
          if (cellIndex === x) {
            return newState;
          }
          return cell;
        });
      }
      return row;
    });
    setGridState(newGridState);
  };

  const handleCellClick = (x, y) => {
    if (gridState[y][x] === 'empty') {
      updateCellState(x, y, 'egg');
      setTimeout(() => {
        setGridState(prevGridState => {
          if (prevGridState[y][x] === 'egg') {
            return prevGridState.map((row, rowIndex) => rowIndex === y ? row.map((cell, cellIndex) => cellIndex === x ? 'chicken' : cell) : row);
          }
          return prevGridState;
        });
      }, Math.random() * (5000 - 1000) + 1000);
    }
  };

  return (
    <div className="App">
      <div className="status-bar">
        <p>Chickens 🐔: {chickenCount}</p>
        <p>Eggs 🥚: {eggCount}</p>
      </div>
      <div>
        {chickenCount === totalCells && <p className="done">Congratulations! All cells are chickens!</p>}
      </div>
      <div className="grid">
        {gridState.map((row, y) => (
          row.map((cell, x) => (
            <div
              key={`${x}-${y}`}
              className={`cell ${cell}`}
              onClick={() => handleCellClick(x, y)}
            >
              {cell === 'egg' && '🥚'}
              {cell === 'chicken' && '🐔'}
            </div>
          ))
        ))}
      </div>
    </div>
  );
};

export default App;
