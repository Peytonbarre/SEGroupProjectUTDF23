import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // if you are using react-router

export function Friends() {
  const [friends, setFriends] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const history = useNavigate(); // to programmatically navigate

  const fetchUsernameAndFriends = async () => {
    try {
      // Replace with your actual endpoint to get the current user's username
      const usernameResponse = await axios.get('http://localhost:5000/getCurrentUsername');
      const username = usernameResponse.data.username;

      if (!username) {
        // If no username, redirect to login
        history('/login');
        return;
      }

      const friendsResponse = await axios.get(`http://localhost:5000/getFriends?username=${username}`);
      setFriends(friendsResponse.data.friends);
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to fetch data');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsernameAndFriends();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>My Friends</h2>
      <ul>
        {friends.length > 0 ? (
          friends.map((friend, index) => <li key={index}>{friend}</li>)
        ) : (
          <li>No friends found</li>
        )}
      </ul>
    </div>
  );
}
