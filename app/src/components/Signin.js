import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Signin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("");
    const navigate = useNavigate();

    const submitData = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3005/signin', {
                username: username,
                password: password
            });

            if (response.data.msg === "user matched") {
                setStatus("success");
                navigate('/data');
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error('Error signing in:', error);
            setStatus("error");
        }
    };

    return (
        <div className="bodyRegister">
            <div className="container">
                <form onSubmit={submitData}>
                    <h2>Signin</h2>
                    <div className="input-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" required onChange={(e) => setUsername(e.target.value)} value={username} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required onChange={(e) => setPassword(e.target.value)} value={password} />
                    </div>
                    <button type="submit">Sign In</button>
                </form>
                {status === "success" && <div className="success">Sign-in successful!</div>}
                {status === "error" && <div className="error">Error signing in. Please try again.</div>}
            </div>
        </div>
    );
}
