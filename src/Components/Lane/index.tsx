
import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import './styles.css'; 

const Lane: React.FC<{ title: string; tasks: string[]; onDrop: (task: string, lane: string) => void }> = ({ title, tasks, onDrop }) => {
  return (
    <Droppable droppableId={title}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps} className="lane">
          <h3>{title}</h3>
          {tasks.map((task, index) => (
            <Draggable key={task} draggableId={task} index={index}>
              {(provided) => (
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="task">
                  {task}
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Lane;
