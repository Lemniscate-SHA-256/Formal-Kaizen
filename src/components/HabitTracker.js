// src/components/HabitTracker.js
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import HabitList from './HabitList';
import AddHabitForm from './AddHabitForm';
import HabitDetail from './HabitDetail';
import Statistics from './Statistics';

const HabitTracker = () => {
  const [habits, setHabits] = useState([]);

  const addHabit = (habit) => {
    setHabits([...habits, habit]);
  };

  const updateHabit = (updatedHabit) => {
    setHabits(habits.map(habit => habit.id === updatedHabit.id ? updatedHabit : habit));
  };

  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <HabitList habits={habits} />
        </Route>
        <Route path="/add">
          <AddHabitForm addHabit={addHabit} />
        </Route>
        <Route path="/habit/:id">
          <HabitDetail habits={habits} updateHabit={updateHabit} />
        </Route>
        <Route path="/statistics">
          <Statistics habits={habits} />
        </Route>
      </Switch>
    </div>
  );
};

export default HabitTracker; // Remove this line