import React from 'react';
import { Line } from 'react-chartjs-2';

const StatisticsDisplay = ({ habits }) => {
  const chartData = {
    labels: habits.map((_, index) => index + 1),
    datasets: habits.map((habit, index) => ({
      label: habit.name,
      data: habit.outcomes.map((outcome) => outcome.value),
      backgroundColor: `rgba(75, 192, 192, 0.2)`,
      borderColor: `rgba(75, 192, 192, 1)`,
      borderWidth: 1,
    })),
  };

  return (
    <div>
      <h2>Statistics Display</h2>
      <Line data={chartData} />
    </div>
  );
};

export default StatisticsDisplay;