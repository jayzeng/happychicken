import React from 'react';
import "./Cell.css";

const Cell = ({ state, onCellClick }) => {
  const renderContent = () => {
    switch (state) {
      case 'egg':
        // Render egg representation (could be an image or a simple div with styling)
        return <div className="egg">🥚</div>;
      case 'chicken':
        // Render chicken representation
        return <div className="chicken">🐔</div>;
      default:
        // Empty cell representation
        return <div className="empty"></div>;
    }
  };

  return (
	<div className={`cell ${state}`} onClick={() => state === 'empty' && onCellClick()}>
	{renderContent()}
  </div>
  );
};

export default Cell;
