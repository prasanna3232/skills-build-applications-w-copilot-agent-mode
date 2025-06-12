import React, { useEffect, useState } from 'react';

const USERS_API_URL = 'http://localhost:8000/api/users/';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(USERS_API_URL)
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error('Error fetching users:', err));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="component-heading display-4 mb-4">Users</h2>
      <div className="row">
        {users.map((user, idx) => (
          <div className="col-md-4 mb-4" key={user.id || idx}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{user.username}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
