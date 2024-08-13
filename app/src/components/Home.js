import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bodyHome">
        <h1>Welcome to Our Website</h1>
        <div className="button-container">
        <Link to="/signin">
            <button className="sign-in-button">Sign In</button>
        </Link>
        <Link to="/register">
            <button className="register-button">Register</button>
        </Link>
        </div>
    </div>
  )
}
