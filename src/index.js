// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HabitTracker from './components/HabitTracker';
import './index.css';

ReactDOM.render(
  <Router>
    <HabitTracker />
  </Router>,
  document.getElementById('root')
);

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
      progress: [...habit.progress, new Date()]
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

// src/components/Statistics.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const Statistics = ({ habits }) => {
  const data = habits.map(habit => ({
    name: habit.name,
    progress: habit.progress.length
  }));

  return (
    <div>
      <h1>Statistics</h1>
      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Bar dataKey="progress" barSize={20} fill="#413ea0" />
      </BarChart>
    </div>
  );
};