import React, { useEffect, useState } from 'react';

const LEADERBOARD_API_URL = 'http://localhost:8000/api/leaderboard/';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch(LEADERBOARD_API_URL)
      .then(res => res.json())
      .then(data => setLeaderboard(data))
      .catch(err => console.error('Error fetching leaderboard:', err));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="component-heading display-4 mb-4">Leaderboard</h2>
      <div className="row">
        {leaderboard.map((entry, idx) => (
          <div className="col-md-4 mb-4" key={entry.id || idx}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{entry.name}</h5>
                <p className="card-text mb-1"><strong>Score:</strong> {entry.score}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Leaderboard;
