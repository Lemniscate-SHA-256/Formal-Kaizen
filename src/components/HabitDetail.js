// src/components/HabitDetail.js
import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

const HabitDetail = ({ habits, updateHabit }) => {
  const { id } = useParams();
  const habit = habits.find(h => h.id === parseInt(id));
  const history = useHistory();

  const markProgress = () => {
    const updatedHabit = {
      ...habit,
      progress: [...habit.progress, new Date()],
    };
    updateHabit(updatedHabit);
    history.push('/');
  };

  return (
    <div>
      <h1>{habit.name}</h1>
      <button onClick={markProgress}>Mark Progress</button>
      <ul>
        {habit.progress.map((date, index) => (
          <li key={index}>{date.toString()}</li>
        ))}
      </ul>
    </div>
  );
};

export default HabitDetail;