// ThoughtRecords.js
import React, { useState } from 'react';
import './ThoughtRecords.css';

const ThoughtRecords = () => {
  const [thought, setThought] = useState('');
  const [emotion, setEmotion] = useState('');
  const [evidenceFor, setEvidenceFor] = useState('');
  const [evidenceAgainst, setEvidenceAgainst] = useState('');
  const [alternativePerspective, setAlternativePerspective] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., save thought record to database
    console.log('Thought Record Submitted:', {
      thought,
      emotion,
      evidenceFor,
      evidenceAgainst,
      alternativePerspective
    });
    // Clear form fields after submission
    setThought('');
    setEmotion('');
    setEvidenceFor('');
    setEvidenceAgainst('');
    setAlternativePerspective('');
  };

  return (
    <div className="thought-records-container">
      <h2>Thought Records</h2>
      <form onSubmit={handleSubmit} className="thought-records-form">
        <div>
          <label htmlFor="thought">Thought:</label>
          <textarea
            id="thought"
            value={thought}
            onChange={(e) => setThought(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="emotion">Emotion:</label>
          <input
            type="text"
            id="emotion"
            value={emotion}
            onChange={(e) => setEmotion(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="evidenceFor">Evidence For:</label>
          <textarea
            id="evidenceFor"
            value={evidenceFor}
            onChange={(e) => setEvidenceFor(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="evidenceAgainst">Evidence Against:</label>
          <textarea
            id="evidenceAgainst"
            value={evidenceAgainst}
            onChange={(e) => setEvidenceAgainst(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="alternativePerspective">Alternative Perspective:</label>
          <textarea
            id="alternativePerspective"
            value={alternativePerspective}
            onChange={(e) => setAlternativePerspective(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ThoughtRecords;
