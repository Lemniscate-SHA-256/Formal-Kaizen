import React, { useState } from 'react';

const HabitTracking = () => {
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState('');

  const handleAddHabit = () => {
    if (newHabit.trim() !== '') {
      setHabits([...habits, { name: newHabit, outcomes: [] }]);
      setNewHabit('');
    }
  };

  const handleDeleteHabit = (habitIndex) => {
    const updatedHabits = [...habits];
    updatedHabits.splice(habitIndex, 1);
    setHabits(updatedHabits);
  };

  return (
    <div>
      <h2>Habit Tracking</h2>
      <input
        type="text"
        value={newHabit}
        onChange={(e) => setNewHabit(e.target.value)}
      />
      <button onClick={handleAddHabit}>Add Habit</button>
      <ul>
        {habits.map((habit, index) => (
          <li key={index}>
            {habit.name}
            <button onClick={() => handleDeleteHabit(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitTracking;