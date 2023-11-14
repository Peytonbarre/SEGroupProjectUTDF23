import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function Friends() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('access_token'); // Retrieve the token from storage

    // Configure the Axios header with the token
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    axios.get('http://127.0.0.1:5000/getFriends', config)
      .then(response => {
        setFriends(response.data.friends);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>My Friends</h2>
      {friends.length > 0 ? (
        <ul>
          {friends.map((friend, index) => (
            <li key={index}>{friend}</li>
          ))}
        </ul>
      ) : (
        <p>No friends</p>
      )}
    </div>
  );
}
