import React from 'react';
import './styles.css';

import people1 from '../../assets/people1.png';
import people2 from '../../assets/people2.png';
import people3 from '../../assets/people3.png';
import people4 from '../../assets/people4.png';

const Cards: React.FC = () => {
  return (
    <div className="cards box">
      <div className="card-header pink-box">Cards Combinations</div>
      
      <div className="card">
        <h2 className="card-title">Card Title</h2>
        <p className="card-description">A description of a task.</p>
      </div>

      <div className="card">
        <div className="images">
          <img src={people1} alt="Design member 1" />
          <img src={people2} alt="Design member 2" />
        </div>
        <h2 className="card-title">Card Title</h2>
        <p className="card-description">A description of a task.</p>
      </div>

      <div className="card">
        <h2 className="card-title">Card Title</h2>
        <p className="card-description">A description of a task.</p>
        <div className="tasks">
          <label><input type="checkbox" /> Task 1</label>
          <label><input type="checkbox" /> Task 2</label>
          <label><input type="checkbox" /> Task 3</label>
        </div>
      </div>

      <div className="card">
        <div className="images">
          <img src={people3} alt="Design member 3" />
          <img src={people4} alt="Design member 4" />
        </div>
        <h2 className="card-title">Card Title</h2>
        <p className="card-description">A description of a task.</p>
        <div className="tasks">
          <label><input type="checkbox" /> Task 1</label>
          <label><input type="checkbox" /> Task 2</label>
          <label><input type="checkbox" /> Task 3</label>
        </div>
      </div>

      <div className="tags">
        <div className="tag rose-box">Tag</div>
        <div className="tag grey-box">Tag</div>
        <div className="tag green-box">Tag</div>
      </div>
    </div>
  );
};

export default Cards;
