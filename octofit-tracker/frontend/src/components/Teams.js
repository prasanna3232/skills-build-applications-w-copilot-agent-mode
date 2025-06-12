import React, { useEffect, useState } from 'react';

const TEAMS_API_URL = 'http://localhost:8000/api/teams/';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch(TEAMS_API_URL)
      .then(res => res.json())
      .then(data => setTeams(data))
      .catch(err => console.error('Error fetching teams:', err));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="component-heading display-4 mb-4">Teams</h2>
      <div className="row">
        {teams.map((team, idx) => (
          <div className="col-md-4 mb-4" key={team.id || idx}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{team.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teams;
