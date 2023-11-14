import React, { useState } from 'react';
import axios from 'axios';

export const Dashboard = () => {
    const [username, setUsername] = useState('');

    const handleAddFriend = async () => {
        try {
            const response = await axios.post('http://localhost:5000/addFriend', { username });
            console.log(response.data); // Handle the response appropriately
        } catch (error) {
            console.error('Error adding friend', error);
            // Handle error appropriately
        }
    };

    return (
        <div>
            <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Enter username"
            />
            <button onClick={handleAddFriend}>Add Friend</button>
        </div>
    );
};
