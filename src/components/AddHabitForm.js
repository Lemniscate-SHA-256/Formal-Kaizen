// src/components/AddHabitForm.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddHabitForm = ({ addHabit }) => {
  const [name, setName] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    addHabit({ id: Date.now(), name, progress: [] });
    history.push('/');
  };

  return (
    <div>
      <h1>Add Habit</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Habit name"
          required
        />
        <button type="submit">Add Habit</button>
      </form>
    </div>
  );
};

export default AddHabitForm;