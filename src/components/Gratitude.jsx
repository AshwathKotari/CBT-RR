import React, { useState, useEffect } from 'react';
import './Gratitude.css';

const Gratitude = () => {
  const [gratitudeItem, setGratitudeItem] = useState('');
  const [gratitudeList, setGratitudeList] = useState([]);

  useEffect(() => {
    const storedGratitudeList = JSON.parse(localStorage.getItem('gratitudeList'));
    if (storedGratitudeList && Array.isArray(storedGratitudeList)) {
      setGratitudeList(storedGratitudeList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('gratitudeList', JSON.stringify(gratitudeList));
  }, [gratitudeList]);

  const addGratitudeItem = () => {
    if (gratitudeItem.trim() !== '') {
      setGratitudeList([...gratitudeList, gratitudeItem]);
      setGratitudeItem('');
    }
  };

  const deleteGratitudeItem = (index) => {
    const updatedGratitudeList = [...gratitudeList];
    updatedGratitudeList.splice(index, 1);
    setGratitudeList(updatedGratitudeList);
  };

  return (
    <div className="gratitude-container">
      <h2>Gratitude</h2>
      <div>
        <input
          type="text"
          className="gratitude-input"
          value={gratitudeItem}
          onChange={(e) => setGratitudeItem(e.target.value)}
          placeholder="Enter something you're grateful for..."
        />
        <button onClick={addGratitudeItem}>Add Item</button>
      </div>
      <ul className="gratitude-list">
        {gratitudeList.map((item, index) => (
          <li key={index} className="gratitude-item">
            <span>{item}</span>
            <button onClick={() => deleteGratitudeItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Gratitude;
