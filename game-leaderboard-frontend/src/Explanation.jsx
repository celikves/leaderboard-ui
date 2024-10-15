import React from 'react';

const Explanation = () => {
  return (
    <div className="bg-gray text-white p-4 rounded-md my-4 text-sm m-4">
      <h2 className="text-lg font-semibold mb-2 text-main">Leaderboard Information</h2>
      <p>This table displays the top players ranked by their weekly earnings.</p>
      <ul className="list-disc list-inside">
        <li><strong>Country:</strong> Player's country of origin.</li>
        <li><strong>Username:</strong> The player's unique username.</li>
        <li><strong>Rank:</strong> The player's current rank based on their earnings.</li>
        <li><strong>Money:</strong> Total earnings by the player this week.</li>
        <li><strong>Daily Diff:</strong> Changes in ranking today. ("Green" for positive, "Red" for negative and "Yellow" for zero.)</li>
      </ul>
    </div>
  );
};

export default Explanation;
