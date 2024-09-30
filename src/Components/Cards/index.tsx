import React from 'react';
import './styles.css';

const Index: React.FC = () => {
  return (
    <div className="cards">
      <div className="card-header">Cards Combinations</div>
      <div className="card">
        <h2 className="card-title">Card Title</h2>
        <p className="card-description">A description of a task.</p>
        <div className="tasks">
          <label><input type="checkbox" /> Task 1</label>
          <label><input type="checkbox" /> Task 2</label>
          <label><input type="checkbox" /> Task 3</label>
        </div>
      </div>
      {/* Repeat similar structure for additional cards */}
    </div>
  );
};

export default Index;
