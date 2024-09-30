import React from 'react';
import './styles.css';

const ComponentsSection: React.FC = () => {
  return (
    <div className="components-section box">
      <div className="labels">
        <div className="label base-box">Label</div>
        <div className="label pink-box">Label</div>
        <div className="label green-box">Label</div>
        <div className="label lavender-box">Label</div>
        <div className="label grey-box">Label</div>
      </div>

      <div className="tags">
        <div className="tag base-box">Tag</div>
        <div className="tag pink-box">Tag</div>
        <div className="tag green-box">Tag</div>
        <div className="tag lavender-box">Tag</div>
        <div className="tag grey-box">Tag</div>
      </div>

      <div className="tasks">
        <label>
          <input type="checkbox" className="checkbox" />
          Task 1
        </label>
        <label>
          <input type="checkbox" className="checkbox" />
          Task 2
        </label>
        <label>
          <input type="checkbox" className="checkbox" />
          Task 3
        </label>
      </div>
    </div>
  );
};

export default ComponentsSection;
