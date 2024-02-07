
import React, { useState } from 'react';
import './ActivityPlanning.css'; 

const ActivityPlanning = () => {
  const [activity, setActivity] = useState('');
  const [activityList, setActivityList] = useState([]);

  const addActivity = () => {
    if (activity.trim() !== '') {
      setActivityList([...activityList, activity]);
      setActivity('');
    }
  };

  const deleteActivity = (index) => {
    const updatedActivityList = [...activityList];
    updatedActivityList.splice(index, 1);
    setActivityList(updatedActivityList);
  };

  return (
    <div className="activity-planning-container">
      <h2>Activity Planning</h2>
      <div className="activity-planning-input">
        <input
          type="text"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          placeholder="Enter activity name..."
        />
        <button onClick={addActivity}>Add Activity</button>
      </div>
      <ul className="activity-planning-list">
        {activityList.map((item, index) => (
          <li key={index} className="activity-planning-item">
            {item}
            <button onClick={() => deleteActivity(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActivityPlanning;
