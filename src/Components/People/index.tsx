import React from 'react';
import './styles.css';

import people1 from '../../assets/people1.png';
import people2 from '../../assets/people2.png';
import people3 from '../../assets/people3.png';
import people4 from '../../assets/people4.png';
import people5 from '../../assets/people5.png';
import people6 from '../../assets/people6.png';

const People: React.FC = () => {
  return (
    <div className="people box">
      <div className="team">
        <h3>Design</h3>
        <img src={people1} alt="Design member 1" />
        <img src={people2} alt="Design member 2" />
      </div>
      <div className="team">
        <h3>Engineering</h3>
        <img src={people3} alt="Engineering member 1" />
        <img src={people4} alt="Engineering member 2" />
      </div>
      <div className="team">
        <h3>PM</h3>
        <img src={people5} alt="PM member 1" />
        <img src={people6} alt="PM member 2" />
      </div>
    </div>
  );
};

export default People;
