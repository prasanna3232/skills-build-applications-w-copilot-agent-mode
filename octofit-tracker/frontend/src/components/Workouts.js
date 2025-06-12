import React, { useEffect, useState } from 'react';

const WORKOUTS_API_URL = 'http://localhost:8000/api/workouts/';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch(WORKOUTS_API_URL)
      .then(res => res.json())
      .then(data => setWorkouts(data))
      .catch(err => console.error('Error fetching workouts:', err));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="component-heading display-4 mb-4">Workouts</h2>
      <div className="row">
        {workouts.map((workout, idx) => (
          <div className="col-md-4 mb-4" key={workout.id || idx}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{workout.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Workouts;
