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

export default Statistics;