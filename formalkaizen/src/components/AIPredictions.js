import React, { useState } from 'react';

const AIIntegration = ({ habits }) => {
  const [predictedOutcome, setPredictedOutcome] = useState('');

  const handlePredictOutcome = () => {
    // Call the deployed model or backend service to predict the impact
    // For demonstration purposes, let's assume a simple prediction
    const totalOutcomes = habits.reduce(
      (sum, habit) => sum + habit.outcomes.reduce((sum, outcome) => sum + outcome.value, 0),
      0
    );
    const averageOutcome = totalOutcomes / habits.length;

    // Call the deployed model or backend service to get the predicted impact
    // Replace the following code with the actual API call or model integration
    const predictedImpact = averageOutcome * 0.8; // Example prediction

    setPredictedOutcome(`Predicted Impact: ${predictedImpact.toFixed(2)}%`);
  };

  return (
    <div>
      <h2>AI Integration</h2>
      <button onClick={handlePredictOutcome}>Predict Impact</button>
      {predictedOutcome && <p>{predictedOutcome}</p>}
    </div>
  );
};

export default AIIntegration;