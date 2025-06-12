import React, { useEffect, useState } from 'react';

const ACTIVITIES_API_URL = 'http://localhost:8000/api/activities/';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch(ACTIVITIES_API_URL)
      .then(res => res.json())
      .then(data => setActivities(data))
      .catch(err => console.error('Error fetching activities:', err));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="component-heading display-4 mb-4">Activities</h2>
      <div className="row">
        {activities.map((activity, idx) => (
          <div className="col-md-4 mb-4" key={activity._id || idx}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{activity.activity_type}</h5>
                <p className="card-text mb-1"><strong>User:</strong> {activity.user_name}</p>
                <p className="card-text mb-1"><strong>Duration:</strong> {activity.duration}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activities;
