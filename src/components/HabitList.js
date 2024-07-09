// src/components/HabitList.js
import React from 'react';
import { Link } from 'react-router-dom';

const HabitList = ({ habits }) => (
  <div>
    <h1>Habits</h1>
    <Link to="/add">Add Habit</Link>
    <ul>
      {habits.map(habit => (
        <li key={habit.id}>
          <Link to={`/habit/${habit.id}`}>{habit.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default HabitList;