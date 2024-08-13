import React from 'react'
import { useState } from 'react';
import axios from 'axios';

export default function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submitData = (e) => {
      e.preventDefault();
        const formData = {
          username: username,
          password: password
        };
        axios.post('http://localhost:3005/register', formData)
          .then(response => {
            console.log('Data sent successfully');
            // Do something with the response if needed
          })
          .catch(error => {
            console.error('Error sending data:', error);
          });
      };

      
  return (
    <div className="bodyRegister">
        <div className="container">
            <form onSubmit={submitData}>
                <h2>Register</h2>
                <div className="input-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required onChange={(e) => setUsername(e.target.value)} value={username}/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required onChange={(e) => setPassword(e.target.value)} value={password}/>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>    
    </div>
  )
}
