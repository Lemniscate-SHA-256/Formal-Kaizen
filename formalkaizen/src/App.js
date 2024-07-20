import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import HabitTracker from './components/HabitTracker';
import Statistics from './components/Statistics';
import AIPredictions from './components/AIPredictions';


function App() {
  const [habits, setHabits] = useState([]);

  const addHabit = (habit) => {
    setHabits([...habits, habit]);
  };

  return (
    <div className="App">
      <h1>Kaizen Habits Tracker</h1>
      <HabitTracker addHabit={addHabit} />
      <Statistics habits={habits} />
      <AIPredictions habits={habits} />
    </div>
  );
}




export default App;
