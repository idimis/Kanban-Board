import React from 'react';
import './styles.css';

const Index: React.FC = () => {
  return (
    <div className="people">
      <div className="team">
        <h3>Design</h3>
        <img src="./assets/people1.png" alt="Design member 1" />
        <img src="./assets/people2.png" alt="Design member 2" />
      </div>
      <div className="team">
        <h3>Engineering</h3>
        <img src="./assets/people3.png" alt="Engineering member 1" />
        <img src="./assets/people4.png" alt="Engineering member 2" />
      </div>
      <div className="team">
        <h3>PM</h3>
        <img src="./assets/people5.png" alt="PM member 1" />
        <img src="./assets/people6.png" alt="PM member 2" />
      </div>
    </div>
  );
};

export default Index;
