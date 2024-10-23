const Explanation = () => {
  const handlePostRequest = async (url) => {
    try {
      const response = await fetch(url, {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      alert("Request sent successfully!");
    } catch (error) {
      console.error("Error sending request:", error);
      alert("Failed to send request.");
    }
  };
  return (
    <div className="bg-gray text-white p-4 rounded-md my-4 text-sm m-4">
      <h2 className="text-lg font-semibold mb-2 text-main">
        Leaderboard Information
      </h2>
      <p>
        This table displays the top players ranked by their weekly earnings.
      </p>
      <ul className="list-disc list-inside">
        <li>
          <strong>Rank:</strong> The player's current rank based on their
          earnings.
        </li>
        <li>
          <strong>Username:</strong> The player's unique username.
        </li>
        <li>
          <strong>Money:</strong> Total earnings by the player this week.
        </li>
        <li>
          <strong>Country:</strong> Player's country of origin.
        </li>
        <li>
          <strong>Daily Diff:</strong> Changes in ranking today. ("Green" for
          positive, "Red" for negative and "Yellow" for zero.)
        </li>
      </ul>
      <div className="mt-4">
        <button
          onClick={() =>
            handlePostRequest(
              "http://localhost:3005/api/leaderboard/calculateYesterdayRanks"
            )
          }
          className="schedule-button"
        >
          Calculate Yesterday Ranks
        </button>
        <button
          onClick={() =>
            handlePostRequest(
              "http://localhost:3005/api/leaderboard/weeklyPrizeDistribution"
            )
          }
          className="schedule-button"
        >
          Weekly Prize Distribution
        </button>
      </div>
    </div>
  );
};

export default Explanation;
