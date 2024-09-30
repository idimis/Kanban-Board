import React from 'react';
import Board from './Components/Board';
import Cards from './Components/Cards';
import ComponentsSection from './Components/ComponentsSection';
import People from './Components/People';
import './App.css'; 

const App: React.FC = () => {
  return (
    <div className="app-container">
      <div className="flex-container">
        <ComponentsSection />
        <People />
      </div>
      <Cards />
      <Board />
    </div>
  );
};

export default App;
