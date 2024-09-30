import React from 'react';
import Lane from './Components/Lane'; 
import './styles.css'; 

const KanbanBoard: React.FC = ({ tasks }) => {
  return (
    <div className="lanes" style={{ display: 'flex', justifyContent: 'space-between' }}>
      
      {Object.keys(tasks).map((laneKey) => (
        <Lane key={laneKey} title={laneKey} tasks={tasks[laneKey]} />
      ))}
    </div>
  );
};

export default KanbanBoard;
