import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import KanbanBoard from './Components/KanbanBoard';
import InputTask from './Components/InputTask';
import Footer from './Components/Footer';
import { DragDropContext, Droppable } from 'react-beautiful-dnd'; // Added Droppable
import Board from './Components/Board';
import Cards from './Components/Cards';
import ComponentsSection from './Components/ComponentsSection'; // Corrected name
import People from './Components/People';
import Lane from './Components/Lane'; 


const Test: React.FC = () => {
  const [tasks, setTasks] = useState({
    'To Do': [],
    'In Progress': [],
    'Done': [],
  });

  const handleAddTask = (task: string) => {
    setTasks(prev => ({ ...prev, 'To Do': [...prev['To Do'], task] }));
  };

  const onDragEnd = (result: any) => {
    const { source, destination } = result;

    if (!destination) return;

    const sourceLane = source.droppableId;
    const destLane = destination.droppableId;

    const taskToMove = tasks[sourceLane][source.index];

    // Move task
    setTasks(prev => {
      const newSourceLaneTasks = [...prev[sourceLane]];
      newSourceLaneTasks.splice(source.index, 1);

      const newDestLaneTasks = [...prev[destLane]];
      newDestLaneTasks.splice(destination.index, 0, taskToMove);

      return {
        ...prev,
        [sourceLane]: newSourceLaneTasks,
        [destLane]: newDestLaneTasks,
      };
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="kanban" direction="horizontal">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <Header />
            <InputTask onAddTask={handleAddTask} />
            <KanbanBoard tasks={tasks} />
            <Cards />
            <Board />
            <People />
            <Lane />
            <ComponentsSection />
            <Footer />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Test />} />
    </Routes>
  );
};

export default App;
