import React from 'react';
import Lane from './Lane'; 
import './styles.css'; 

interface KanbanBoardProps {
  tasks: {
    [key: string]: any[]; 
  };
}

const KanbanBoard: React.FC<KanbanBoardProps> = ({ tasks }) => {
  return (
    <div className="lanes" style={{ display: 'flex', justifyContent: 'space-between' }}>
      {Object.keys(tasks).map((laneKey) => (
        <Lane key={laneKey} title={laneKey} tasks={tasks[laneKey]} />
      ))}
    </div>
  );
};

export default KanbanBoard;
