import { useEffect, useState } from 'react';

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Получение данных с API
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data.users);
      } catch (err) {
        console.error('Failed to fetch users:', err);
        setError('Error fetching users');
      }
    };

    fetchUsers();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div classname={`z-50`}>
      <h1>User List</h1>
      {users.length > 0 ? (
        users.map((user) => (
          <div key={user.id}>
            <strong>{user.username}</strong> - {user.email}
          </div>
        ))
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}
