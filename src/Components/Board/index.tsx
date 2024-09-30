import React from 'react';
import './styles.css';

const Board: React.FC = () => {
  return (
    <div className="board box">
      <h1 className="board-title">Starter Board</h1>
      <p className="board-description">A description of a board.</p>
      
      <div className="lanes">
        {/* Left Lane */}
        <div className="lane left-lane">
          <div className="lane-name grey-box">Lane name</div>
          <div className="card">
            <h3 className="card-title">Card Title</h3>
            <p className="card-description">A description of a task.</p>
          </div>
        </div>

        {/* Mid Lane */}
        <div className="lane mid-lane">
          <div className="lane-name purple-box">Lane name</div>
          <div className="card">
            <h3 className="card-title">Card Title</h3>
            <p className="card-description">A description of a task.</p>
          </div>
        </div>

        {/* Right Lane */}
        <div className="lane right-lane">
          <div className="lane-name pink-box">Lane name</div>
          <div className="card">
            <h3 className="card-title">Card Title</h3>
            <p className="card-description">A description of a task.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
