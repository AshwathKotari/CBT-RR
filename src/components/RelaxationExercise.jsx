
import React, { useState } from 'react';
import './RelaxationExercises.css';

const RelaxationExercises = () => {
  const [exercise, setExercise] = useState('');
  const [exerciseList, setExerciseList] = useState([]);

  const addExercise = () => {
    if (exercise.trim() !== '') {
      setExerciseList([...exerciseList, exercise]);
      setExercise('');
    }
  };

  const deleteExercise = (index) => {
    const updatedExerciseList = [...exerciseList];
    updatedExerciseList.splice(index, 1);
    setExerciseList(updatedExerciseList);
  };

  return (
    <div className="relaxation-exercises-container">
      <h2>Relaxation Exercises</h2>
      <div className="relaxation-exercises-input">
        <input
          type="text"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
          placeholder="Enter relaxation exercise..."
        />
        <button onClick={addExercise}>Add Exercise</button>
      </div>
      <ul className="relaxation-exercises-list">
        {exerciseList.map((item, index) => (
          <li key={index} className="relaxation-exercises-item">
            {item}
            <button onClick={() => deleteExercise(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RelaxationExercises;
