import React, { useState } from 'react';

function HabitTracker({ addHabit }) {
  const [habit, setHabit] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addHabit(habit);
    setHabit('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={habit}
        onChange={(e) => setHabit(e.target.value)}
        placeholder="Enter a new habit"
      />
      <button type="submit">Add Habit</button>
    </form>
  );
}

export default HabitTracker;